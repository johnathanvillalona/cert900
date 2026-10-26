# Provider-neutral advertising preparation

Reviewed: October 24, 2026. This is disabled, local preparation. It does not
establish publisher approval, consent compliance or a functioning integration.

## What is prepared

`src/lib/publisher-policy.ts` defines separate source-controlled gates for the
global feature, each provider, confirmed site approval, reviewed terms,
verified provider-specific consent integration, the placement and each
provider/placement pairing. **Every gate is false.** The adapter registry is
empty. No renderer, script loader, analytics client or Worker imports the new
policy. It stores no credentials, traffic claims, SDK URLs or account details.

The only proposed placement is the primary Network+ study guide, resolved from
the existing typed study-resource registry. It corresponds to the previously
reviewed AdSense insertion area after the complete FAQ, away from sample
answers and practice controls. This does not add another placement or change
that existing location. A provider must permit this constrained inventory and
format before integration is considered.

Study Hubs, reference pages, the homepage, directories, legal/support pages and
all active learning routes are excluded. Adding resources or obtaining provider
approval never opts a page in. A future hub/reference placement requires an
explicit content, layout, policy and consent review plus code/tests changes.

`assessPublisherIntegration` is a side-effect-free preparation assessment.
It cannot request an ad, execute an adapter, grant visitor consent or change a
provider account. Query strings, fragments, full URLs, aliases and unknown
paths fail closed. The existing AdSense unit, approval and CMP gates remain
additional requirements for AdSense; the neutral policy cannot bypass them.

## Work still required before any activation

1. Obtain actual site approval from the selected provider. Application
   submission is not approval. Review current formats, revenue share, payment
   threshold/timing, termination, privacy and contractual requirements. Obtain
   owner approval for exclusivity, paid services or material commitments.
2. Confirm the provider supports a single clearly labeled manual placement,
   without popups, redirects, in-text substitution, forced video or automatic
   insertion into active learning screens. Unsupported providers stay blocked.
3. Implement a small provider-specific adapter using the existing
   `startAdvertising` cancellation lifecycle. It must independently verify the
   current advertising consent, exact document and placement before loading or
   requesting anything. A factory merely being registered is not evidence of
   correct behavior.
4. Review the provider's actual consent/CMP integration and supported regions.
   The Google-specific consent reader is not permission for other providers.
   Analytics Allow is never advertising consent. Do not treat non-personalized
   ads as consent-free. No homemade certified CMP replacement is included.
5. Review necessary static-document CSP permissions in a separate activation
   change. The SPA must remain free of advertising SDKs. Unknown or rejected
   consent, GPC where applicable, withdrawal, blocked scripts and ad blockers
   must leave learning usable. Removing a script alone cannot unload an SDK.
6. Preserve fixed responsive geometry, a clear Advertisement label, separation
   from controls, no automatic refresh and at most the approved placement.
   Test both themes at 320, 375, 390, 768 and 1440px using mock responses only.
7. Run complete regressions and obtain separate production-release and
   advertising-activation approvals. No deployment or activation is authorized
   by this preparation document.

No provider-specific adapter, consent bootstrap, CMP publication, script URL,
CSP expansion, account-setting change or ad request is implemented here. There
are no new packages, backend services, subscriptions or database changes.

## Emergency disable and rollback

The new global switch is `PUBLISHER_POLICY.enabled`; per-provider and
per-placement switches provide narrower stops. They are all already off.
AdSense also retains its existing independent `ADVERTISING.enabled` switch,
currently false. Future integrations must consult both applicable gates and
must not cache enablement across page navigation or consent withdrawal.

If advertising is ever approved and released, changing a source flag requires
the controlled build/release process; it is not an immediate remote kill
switch. Immediate recovery uses the previously verified inactive/rollback
Worker version and a separately authorized traffic change. No KV control plane
or new Cloudflare service is introduced. Preserve the known ad-free production
Worker as the rollback checkpoint during any future activation.

## Validation

Focused unit tests exercise every provider, independent kill switches, the
empty adapter registry, existing AdSense gates, all supported learning routes,
all Study Hubs and other static pages, unknown providers and hostile paths.
Mock adapter factories must never be invoked by an assessment. Browser release
checks separately confirm the site makes no advertising network requests;
these configuration tests are not evidence of a real provider integration.
