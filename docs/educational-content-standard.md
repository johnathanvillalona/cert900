# Cert900 educational content standard

## Purpose and applicability

Teach complete beginners clearly, progressively and visually while preserving
technical accuracy and meaningful curriculum coverage. This standard applies to
current and future guides, Study Hub instruction, lessons, diagrams, technical
explanations, knowledge checks, diagram captions, help text, instructional UI copy,
walkthroughs, courses, video scripts, animation scripts and transcripts. Apply it
when creating or revising those resources.
Existing material outside an approved task is audited separately, not silently
rewritten. Each implementation follows its approved content scope; shared standards do not authorize unrelated content changes.

## Design the learning sequence before writing

1. State what the learner will be able to explain or choose in ordinary language.
2. Identify the prerequisite idea. Teach it before introducing a new term.
3. Explain why the idea matters using a familiar situation.
4. Teach one concept, then connect it to an example, process or comparison.
5. Ask a brief self-check that tests understanding rather than a wording trick.
6. Finish with one useful takeaway and a clear next study action.

Use the official exam objectives to check scope, not as a paragraph template.
Group concepts by how a beginner learns them. Curriculum order, product catalogs
and lists of acronyms are not automatically a good teaching sequence.

## Write for someone meeting the subject for the first time

- Prefer familiar words, concrete verbs and direct explanations. Avoid marketing
  claims, filler introductions, motivational padding and repeated definitions.
- Define a technical term on its first use. Expand an acronym and explain what
  it does; expansion alone is not a definition. A new lesson may briefly recall a
  prerequisite so it remains usable from a direct link.
- Keep paragraphs to **1–3 sentences**, normally **20–55 words**. Split any
  paragraph above 65 words. These are review thresholds, not reasons to produce
  choppy one-sentence fragments or remove necessary qualifications.
- Give each paragraph one main idea. After a few short paragraphs, use a named
  subsection, example or useful visual. Do not replace a wall of text with a wall
  of bullets. Use bullets for parallel choices; use prose to explain relationships.
- Keep explanations specific. Say what a control protects, which decision a
  metric supports, and where an analogy stops being accurate.
- Do not imply that a practice score predicts passing, that a tool guarantees
  safety/fairness, or that this introductory material is a complete course.

## Sound like an instructor speaking to a beginner

Write as a knowledgeable, approachable instructor who has time to explain an idea.
Be patient without talking down to the learner. Natural writing is precise and
connected; it does not need hype, jokes, forced informality or extra filler.

- Give the learner enough context to follow the decision. “When you sort a ticket
  into an urgent or routine queue, you’re using classification” teaches more
  naturally than “A category calls for classification.”
- Use complete, connected sentences in explanations. Short paragraphs should
  still have a beginning and a point. Join closely related thoughts when several
  tiny sentences would sound like a checklist read by a machine.
- Vary sentence length and openings. Use “if,” “when,” “because,” “for example”
  and similar transitions when they explain a real relationship. Do not insert a
  stock transition into every paragraph or start every lesson with “Imagine,”
  “Let’s explore” or “In today’s lesson.”
- Address the learner directly when it helps: “you can check the source” is often
  clearer than “source verification should be performed.” Contractions are fine
  where they sound natural; they are not a quota or a substitute for rewriting.
- Keep technical names and necessary qualifications. Explain an abstraction with
  a concrete action before introducing another abstraction. Avoid noun chains
  such as “effective-policy evidence validation” in beginner instruction.
- Explain what to notice in a visual. Instead of “Read inward,” say that each
  smaller box shows an approach within the larger field. A caption should help
  someone understand the relationship without having to interpret the layout.
- Give knowledge-check feedback a teaching voice. Explain why an answer fits,
  rather than only naming it. State the unscored/no-storage boundary plainly:
  “This is just for practice—it won’t affect your score, and your answer isn’t
  saved.” Do not imply that the check collects an answer when it has no input.
- Keep table headings, buttons and diagram step labels brief and conventional.
  They do not all need full sentences. Use the accompanying explanation to make
  their meaning clear instead of turning every label into a long instruction.

### Textual read-aloud review

Read the complete lesson in sequence, including goals, captions, table cells,
scenario labels, answer reasoning, takeaways and instructional help. A textual
read-aloud assessment is sufficient; no audio tool or paid service is required.

For each awkward passage, record the original, its replacement and the meaning
that must stay intact. Ask whether a beginner could follow it on hearing it once,
whether the next sentence follows naturally, and whether the qualification is
still true. Fix the explanation itself; do not use a synonym-replacement pass or
an “AI humanizer.” Review all lessons, including passages left unchanged because
they already work. Word counts and phrase checks are safeguards, not proof of a
human voice or teaching quality.

## Use progressive disclosure without hiding the lesson

Keep the learning goal, essential explanation, meaningful example, key caveats
and takeaway visible by default. A learner should understand the concept without
opening every disclosure. Keep that material in initial semantic HTML.

Use a native disclosure for extensions such as specialist metric names, detailed
service catalogs, implementation variants, pricing arithmetic or historical
availability notes. Name the disclosure for what it contains. Include all detail
in the delivered HTML, operable without JavaScript. Do not put essential warnings
or the only definition of the lesson's central concept in a closed disclosure.

Do not repeat the full core explanation in the extension. Move and rewrite its
technical depth instead. A self-check is a separate optional disclosure with its
own answer reasoning; it must be labeled unscored unless an approved grading
integration explicitly exists.

## Visuals must earn their space

- Use numbered steps for an actual sequence. Use parallel cards or a comparison
  for alternatives; do not draw a process arrow between unrelated products.
- Introduce the question a visual answers. Use a meaningful caption and an
  equivalent text explanation or semantic steps that work with assistive tools.
- Prefer original HTML/CSS or SVG. Keep labels readable at 320px instead of
  shrinking a desktop diagram. Stack steps on phones and keep page overflow off.
- Show denominators and units. Numerical graphics must describe the same example
  as the surrounding explanation. Verify every calculation independently.
- Do not use color alone for meaning. Label categories, outcomes and boundaries.
  Mark decorative arrows/counters as decorative where semantic lists convey order.
- Never imply an analogy is the architecture, that a region is an authorization
  scope, or that a familiar service name makes unsupported features available.

## Scenarios and knowledge checks

Use plausible situations, invented data and a decision the learner can follow.
Show the starting problem, the choice and the reason it fits. For a process, walk
through numbered actions and their observable consequences. Keep incidental
business details short. Do not invent official questions or copy vendor exams.

A knowledge check should ask one clear question or a tightly related comparison.
Give explanatory feedback, including why an attractive alternative does not fit.
Do not rely on obscure trivia, position clues or ambiguous unstated constraints.
Native reading checks do not create attempts, store answers, update progress or
emit new analytics events. Changing that requires separate authorization.

## Reading hierarchy and accessibility

Use one page H1, a clear lesson H2 and descriptive H3 subsections. Keep headings
and IDs unique. Give lessons stable anchors and a keyboard-accessible contents
list. Keep reading text near **60–65 characters per line** where practical.

Primary teaching text is at least **16px**; supporting text is at least **14px**.
Interactive targets are at least **44px** high with visible keyboard focus.
Use restrained spacing and distinct examples/takeaways. Avoid competing callouts
around every sentence, sticky controls that cover text, essential hover content,
or decorative animation. Respect both themes, zoom and reduced motion.

Comparison cards should stack naturally on phones. A wide reference table may
scroll within a named, keyboard-focusable region; the page itself must not scroll
horizontally. Test closed and open disclosures at **320, 375, 390, 768 and 1440px**.
Browser emulation does not establish screen-reader or physical-device quality.

## Accuracy and coverage review

Before rewriting, inventory the current concepts, objective mappings, examples
and important limitations. Afterwards, map each to its new core, visual or
extension location. Term-presence tests support review but do not prove accuracy.

Use current official primary documentation for technical claims, service names,
availability and objectives. Record the sources and actual review date. Separate
exam objectives from optional enrichment and official weights from site practice
allocations. Recheck announcements before release; never fabricate freshness.

Check numerical examples, service overlaps, boundary conditions and misleading
absolutes. Record official-source inconsistencies. Keep original citations and
necessary nuance even when the first explanation becomes simpler. Document
contradictory question-bank items as separate errata unless edits are authorized.

## Future scripts, animations and transcripts

Use the same goal, stable lesson identity, concept sequence and verified sources.
Write spoken sentences that sound natural aloud. Introduce a term before putting
an acronym on screen. Plan each visual beat around one teaching purpose, with a
pause for interpretation before the next idea. Do not narrate a dense table while
also introducing unrelated concepts on screen.

Write a video script for spoken delivery, rather than reading article headings
and reference tables verbatim. Explain a diagram as it appears: identify what the
viewer is looking at, follow one relationship or action, then explain why it
matters. Use examples and demonstrations to build understanding before naming a
long list of terms. Mark useful pauses and pronounce new terminology clearly;
vary sentence rhythm without changing the technical meaning. Keep transcripts
faithful to the teaching, including the information conveyed by a visual.

Provide captions/transcripts containing all instructional information, explain
visual-only relationships in narration or description, and label onscreen actions
clearly. Give viewers time to attempt a self-check. Keep corrections and source
review dates aligned across article, script, diagram and transcript. This standard
does not authorize an LMS, video engine, new service or paid tool.

## Acceptance checklist

- A beginner can state the goal, follow the example and explain the takeaway.
- Terms are defined, paragraphs are short, and essential instruction is visible.
- Every lesson has received a textual read-aloud review, including captions and
  help text. The voice is natural and connected without filler or forced warmth.
- Coverage is preserved in a reviewed matrix; extensions provide depth without
  repeating the main lesson. Processes and comparisons use appropriate visuals.
- Initial HTML is useful without JavaScript. Controls work by keyboard and touch.
- Five widths and both themes have readable visuals and no clipped controls.
- Canonicals, links, sample/schema parity and headings remain correct.
- Required unit/browser/simulator/Worker/build/security checks pass; protected
  learning, privacy and production behavior is unchanged.
- Before/after screenshots and remaining manual checks accompany owner review.

Do not treat a readability score, word-count reduction or green test suite as a
substitute for visual and educational review with the owner.
