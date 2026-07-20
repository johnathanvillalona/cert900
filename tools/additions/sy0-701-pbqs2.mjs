// Security+ simulation PBQs: 2 terminal, 2 match, 2 order, 1 config, 1 hotspot.
export default {
  examId: "sy0-701",
  pbqs: [
    {
      kind: "terminal",
      t: "indicators-of-compromise",
      title: "Hunt the Rogue Listener",
      scen:
        "An EDR alert flagged unusual outbound traffic from a Linux build server. You have a shell on the host and need to work from open sockets down to the file on disk before the malware analysts can take it.",
      host: "analyst@build01:~$ ",
      tasks: [
        {
          prompt:
            "List the TCP sockets the host is listening on, including the process that owns each one.",
          accept: [
            "(?:sudo )?ss -(?=[tulpn]*l)(?=[tulpn]*p)[tulpn]{2,6}",
            "(?:sudo )?netstat -(?=[tulpn]*l)(?=[tulpn]*p)[tulpn]{2,6}",
            // Must accept the canonical listening-socket form, which carries a
            // protocol suffix and a colon: lsof -nP -iTCP -sTCP:LISTEN
            "(?:sudo )?lsof(?: -[a-zA-Z]+)* -i(?:TCP)?(?: -sTCP:LISTEN)?(?: -[a-zA-Z]+)*",
          ],
          hint: "You need the listening sockets plus the owning process, not just the ports.",
          output:
            "Netid State  Local Address:Port  Peer Address:Port  Process\n" +
            "tcp   LISTEN 0.0.0.0:22          0.0.0.0:*          users:((\"sshd\",pid=812,fd=3))\n" +
            "tcp   LISTEN 127.0.0.1:5432      0.0.0.0:*          users:((\"postgres\",pid=1043,fd=5))\n" +
            "tcp   LISTEN 0.0.0.0:8080        0.0.0.0:*          users:((\"jenkins\",pid=2277,fd=11))\n" +
            "tcp   LISTEN 0.0.0.0:4444        0.0.0.0:*          users:((\"updatesvc\",pid=8823,fd=4))",
        },
        {
          prompt:
            "Show the currently established TCP connections and their remote peers, so the suspect listener's session can be traced.",
          accept: [
            "(?:sudo )?ss -(?=[tanpu]*t)(?=[tanpu]*n)[tanpu]{2,5}(?: state established)?",
            // Require numeric output plus either -a or -t. Demanding -a would
            // reject `netstat -tnp`, which shows established connections only
            // and is arguably the better answer here; the sibling ss pattern
            // already accepts the equivalent `ss -tnp`.
            "(?:sudo )?netstat -(?=[antpu]*n)(?=[antpu]*[at])[antpu]{2,5}",
            "(?:sudo )?(?:ss|netstat) -[a-z]{2,6} \\| grep -i (?:established|estab)",
          ],
          output:
            "State Recv-Q Send-Q Local Address:Port  Peer Address:Port    Process\n" +
            "ESTAB 0      0      10.20.4.31:22       10.20.4.9:52210      users:((\"sshd\",pid=812,fd=4))\n" +
            "ESTAB 0      312    10.20.4.31:4444     203.0.113.66:51044   users:((\"updatesvc\",pid=8823,fd=5))\n" +
            "(The updatesvc process is holding an open session to an external address.)",
        },
        {
          prompt:
            "Reveal the on-disk path of the executable behind PID 8823.",
          accept: [
            "(?:sudo )?ls -l[a-z]* /proc/8823/exe",
            "(?:sudo )?readlink(?: -f)? /proc/8823/exe",
            "(?:sudo )?lsof -p 8823",
            "(?:sudo )?stat /proc/8823/exe",
          ],
          hint: "Every running process exposes a link to its own binary under /proc.",
          output:
            "lrwxrwxrwx 1 root root 0 Jul 19 02:11 /proc/8823/exe -> /tmp/.cache/updatesvc",
        },
        {
          prompt:
            "Generate a SHA-256 digest of /tmp/.cache/updatesvc so the sample can be submitted to threat intelligence.",
          accept: [
            "(?:sudo )?sha256sum(?: -b)? /tmp/\\.cache/updatesvc",
            "(?:sudo )?shasum -a 256 /tmp/\\.cache/updatesvc",
            "(?:sudo )?openssl (?:dgst -sha256|sha256) /tmp/\\.cache/updatesvc",
          ],
          output:
            "b41d5c8a9f0e2731cc60a4b8d9e17f3a5624c0be8871d4f2a93e6c1057bd42ff  /tmp/.cache/updatesvc",
        },
      ],
    },
    {
      kind: "terminal",
      t: "certificates",
      title: "Inspect the Expiring Certificate",
      scen:
        "Customers report a browser warning on the payments site. The certificate that the web tier is serving was exported to payments.pem, and the issuing intermediate is in intermediate.pem. Confirm the fault, then confirm the fix.",
      host: "analyst@sec-ws:~$ ",
      tasks: [
        {
          prompt:
            "Print only the validity window of payments.pem, without dumping the whole certificate.",
          accept: [
            "openssl x509 -in payments\\.pem -noout -dates",
            "openssl x509 -noout -dates -in payments\\.pem",
            "openssl x509 -noout -in payments\\.pem -dates",
            "openssl x509 -in payments\\.pem -noout -(?:startdate|enddate)",
            "openssl x509 -noout -(?:startdate|enddate) -in payments\\.pem",
          ],
          hint: "x509 is the subcommand; suppress the encoded output and ask for the dates.",
          output:
            "notBefore=Jul 18 09:15:00 2025 GMT\n" +
            "notAfter=Jul 18 09:15:00 2026 GMT",
        },
        {
          prompt:
            "Decode the certificate in full so the subject, issuer, and the hostnames it covers can be read.",
          accept: [
            "openssl x509 -in payments\\.pem -noout -text",
            "openssl x509 -in payments\\.pem -text -noout",
            "openssl x509 -noout -text -in payments\\.pem",
            "openssl x509 -text -noout -in payments\\.pem",
            "openssl x509 -in payments\\.pem -noout -ext subjectAltName",
            "openssl x509 -noout -ext subjectAltName -in payments\\.pem",
          ],
          output:
            "        Issuer: C = US, O = Example Trust CA, CN = Example Trust TLS RSA CA G2\n" +
            "        Subject: CN = payments.example.com\n" +
            "        Signature Algorithm: sha256WithRSAEncryption\n" +
            "        X509v3 Subject Alternative Name:\n" +
            "            DNS:payments.example.com, DNS:pay.example.com",
        },
        {
          prompt:
            "Have OpenSSL build and check the chain for payments.pem using intermediate.pem as the untrusted link.",
          accept: [
            // The task is to build the chain THROUGH the intermediate, so
            // -untrusted is mandatory. Accepting bare `openssl verify
            // payments.pem` graded a command that does not do the task.
            "openssl verify -untrusted [\\w./-]+ payments\\.pem",
            "openssl verify -CAfile [\\w./-]+ -untrusted [\\w./-]+ payments\\.pem",
            "openssl verify -untrusted [\\w./-]+ -CAfile [\\w./-]+ payments\\.pem",
          ],
          output:
            "C = US, O = Example Trust CA, CN = Example Trust TLS RSA CA G2\n" +
            "error 10 at 0 depth lookup: certificate has expired\n" +
            "error payments.pem: verification failed",
        },
        {
          prompt:
            "The web team says they deployed the renewal. Open a TLS session to payments.example.com on port 443 to see what the server is actually presenting now.",
          accept: [
            "openssl s_client -connect payments\\.example\\.com:443(?: -servername payments\\.example\\.com)?(?: -showcerts)?",
            "openssl s_client -showcerts -connect payments\\.example\\.com:443(?: -servername payments\\.example\\.com)?",
            "openssl s_client -servername payments\\.example\\.com -connect payments\\.example\\.com:443(?: -showcerts)?",
            "openssl s_client -connect payments\\.example\\.com:443 -showcerts -servername payments\\.example\\.com",
          ],
          hint: "s_client is the OpenSSL TLS test client; point it at host:port.",
          output:
            "CONNECTED(00000003)\n" +
            "depth=2 C = US, O = Example Trust CA, CN = Example Trust Root X1\n" +
            "---\n" +
            "Server certificate\n" +
            "subject=CN = payments.example.com\n" +
            "issuer=C = US, O = Example Trust CA, CN = Example Trust TLS RSA CA G2\n" +
            "notAfter=Jul 17 09:15:00 2027 GMT\n" +
            "---\n" +
            "Verify return code: 0 (ok)",
        },
      ],
    },
    {
      kind: "match",
      t: "phishing",
      title: "Name the Social Engineering Play",
      scen:
        "Four separate tickets reached the security desk this week. Record the technique that best describes what happened in each one. Not all techniques will be used.",
      choices: [
        "Vishing",
        "Smishing",
        "Watering hole attack",
        "Typosquatting",
        "Business email compromise",
        "Shoulder surfing",
        "Dumpster diving",
      ],
      items: [
        {
          l: "An accounts payable clerk takes a phone call from a caller claiming to be the bank's fraud desk and is walked through confirming a pending wire",
          a: 0,
        },
        {
          l: "Staff receive an SMS with a shortened link warning that their payroll direct deposit was rejected and must be re-entered",
          a: 1,
        },
        {
          l: "Attackers plant a browser exploit on a regional trade association site that the firm's engineers visit every morning",
          a: 2,
        },
        {
          l: "A user mistypes the address of the company's SaaS portal by one character and lands on a pixel-perfect login page",
          a: 3,
        },
      ],
    },
    {
      kind: "match",
      t: "encryption-technologies",
      title: "Pick the Cryptographic Tool",
      scen:
        "An architect is annotating a design document with the cryptographic capability that satisfies each requirement. Not all capabilities will be used.",
      // "Key stretching" was removed from this list. PBKDF2, bcrypt and Argon2
      // are also irreversible, so it was a defensible second answer to the
      // password-storage item below, and match PBQs grade per item with no
      // room for two right answers. Two decoys remain.
      choices: [
        "Digital signature",
        "Symmetric encryption",
        "Hashing",
        "Steganography",
        "Certificate pinning",
        "Perfect forward secrecy",
      ],
      items: [
        {
          l: "A field technician must be able to prove a firmware image really came from the manufacturer and has not been altered since it was published",
          a: 0,
        },
        {
          l: "A web application must verify a returning user's password without ever holding a stored value that can be turned back into that password",
          a: 2,
        },
        {
          l: "A 40 TB nightly archive must be written to tape fast enough to finish before morning, readable only by holders of a shared secret",
          a: 1,
        },
        {
          l: "Recorded TLS sessions must stay unreadable even if the server's long-term private key is stolen two years from now",
          a: 5,
        },
      ],
    },
    {
      kind: "order",
      t: "risk-management",
      title: "Work the Risk Register",
      scen:
        "A new risk manager is writing the standard operating procedure for handling a newly identified risk. Arrange the activities in the order the procedure should follow.",
      steps: [
        "Identify the risk and record it as an entry in the risk register",
        "Estimate the likelihood of occurrence and the impact if it occurs",
        "Combine those estimates into a risk score and rank the entry against the others",
        "Select the response for the ranked entry: avoid, transfer, mitigate, or accept",
        "Implement the chosen controls and assign a named risk owner",
        "Measure the residual risk that remains and set the next review date",
      ],
    },
    {
      kind: "order",
      t: "vulnerability-remediation",
      title: "Close the Vulnerability Loop",
      scen:
        "An organization is documenting how a single scanner finding travels from discovery through to closure. Put the activities in the order they should be performed.",
      steps: [
        "Inventory the assets that fall within the assessment scope",
        "Run a credentialed scan against those in-scope hosts",
        "Validate each reported finding on the affected host to eliminate false positives",
        "Rank the confirmed findings by severity and business exposure",
        "Apply the patch or a compensating control through the change process",
        "Rescan the host to confirm the finding no longer reports, then report the metrics",
      ],
    },
    {
      kind: "config",
      t: "email-security",
      title: "Set the Mail Gateway Straight",
      scen:
        "A spoofed invoice claiming to come from the company's own domain reached three executives. The mail gateway has not been reviewed since it was migrated. Bring the domain authentication settings to the enforcing state the security team has signed off on.",
      panel: "Secure Email Gateway · Domain Authentication",
      fields: [
        {
          id: "spf",
          label: "Published SPF record",
          type: "select",
          options: [
            "No SPF record published",
            "v=spf1 include:_spf.example.net +all",
            "v=spf1 include:_spf.example.net ~all",
            "v=spf1 include:_spf.example.net -all",
          ],
          answer: 3,
          note: "Every legitimate sending source is now inventoried, and the team wants mail from anything else rejected outright rather than merely marked.",
        },
        {
          id: "dkim",
          label: "Sign outbound mail with DKIM",
          type: "toggle",
          answer: true,
          initial: false,
        },
        {
          id: "dmarc",
          label: "DMARC policy (p=)",
          type: "select",
          options: ["No DMARC record", "none", "quarantine", "reject"],
          answer: 3,
          note: "The monitoring-only rollout ran a full quarter and no legitimate sender failed alignment.",
        },
        {
          id: "relay",
          label: "Relay messages from any source address",
          type: "toggle",
          answer: false,
          initial: true,
        },
        {
          id: "banner",
          label: "Prepend an external-sender warning to inbound mail",
          type: "toggle",
          answer: true,
          initial: false,
        },
        {
          id: "rcpt",
          label: "Reject inbound mail for unknown recipients",
          type: "toggle",
          answer: true,
          initial: true,
          note: "Already blocking directory harvest attempts; this one is configured correctly.",
        },
        {
          id: "siem",
          label: "Forward message disposition logs to the SIEM",
          type: "toggle",
          answer: true,
          initial: true,
        },
      ],
    },
    {
      kind: "hotspot",
      t: "port-security",
      title: "Stop the Wall-Jack Walk-In",
      scen:
        "A visitor plugged a personal laptop into an unused conference-room wall jack and immediately reached internal file shares. The team is rolling out port-based network access control, and one device has to enforce it for that drop.",
      prompt: "Select the ONE device that must act as the 802.1X authenticator for that wall jack.",
      nodes: [
        { id: "inet", x: 8, y: 10, label: "Internet", icon: "cloud" },
        { id: "fw", x: 26, y: 10, label: "Edge firewall", icon: "firewall" },
        { id: "core", x: 46, y: 10, label: "Core switch", icon: "switch" },
        { id: "file", x: 72, y: 6, label: "File server", icon: "server" },
        { id: "radius", x: 72, y: 24, label: "RADIUS server", icon: "server" },
        { id: "acc", x: 46, y: 36, label: "Conference access switch", sub: "wall jacks", icon: "switch" },
        { id: "pc", x: 22, y: 50, label: "Visitor laptop", icon: "pc" },
        { id: "ap", x: 72, y: 46, label: "Guest Wi-Fi AP", icon: "ap" },
      ],
      edges: [
        ["inet", "fw"],
        ["fw", "core"],
        ["core", "file"],
        ["core", "radius"],
        ["core", "acc"],
        ["acc", "pc"],
        ["acc", "ap"],
      ],
      targets: ["acc"],
    },
  ],
}
