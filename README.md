# Pattern — DSA Practice Studio

A responsive, standalone practice app built from all 91 numbered questions in the supplied DSA Interview Practice Set PDF. This is an independent project outside the SoccerApp directory.

## Run locally

From this directory:

```sh
npm run dev
```

Open http://localhost:4173. Requires Python 3 for this convenience command. Alternatively serve this directory with any static HTTP server. Opening index.html directly as a file will not load the question JSON.

## Deploy on Vercel

1. Put this directory in its own Git repository and push it.
2. In Vercel, create a new project and import that repository.
3. **Root Directory:** leave it at the repository root (`.`).
4. **Framework Preset:** Other. **Build Command:** `npm run build`. **Output Directory:** `dist`. The included vercel.json supplies these settings.
5. Deploy. No environment variables, database, or API keys are required.

CLI alternative, run from this directory:

```sh
npx vercel
```

Follow the CLI project prompts; use `npx vercel --prod` when ready for production. This project has been prepared and tested locally, not deployed to a Vercel account.

Vercel documentation: https://vercel.com/docs/builds/configure-a-build

## Features

- 91 original question statements with original numbering and difficulty labels, across 12 topics.
- Search and filters for topic, difficulty, progress, bookmarks, and due revisions.
- Saved notes and any-language code scratchpad. Code is text only: there is no execution, automated judge, or answer key.
- Time-boxed focus timers: 15, 30, or 45 minutes.
- Solved tracking and revision dates: first review 3 days after the first solve, second at 10 days after the first solve (or tomorrow if already overdue), subsequent reviews 10 days after recording another solve. Record a re-solve by changing status to In progress, then Solved.
- Four illustrative visual lessons: two pointers, binary search, BFS, and stairs DP with 1/2/3 steps. Previous, next, autoplay, pause, and restart controls. These are curated examples, not per-question animations.
- Six-week topic roadmap and a 45-minute mock-interview mode with saved self-assessments.
- Resource directory and an in-app sitemap.
- Local backup export/import under Resources. Import replaces the current local progress with the selected backup. Export first to preserve your existing work.

## Sitemap

| Route | Purpose |
| --- | --- |
| `/#/dashboard` | Overview, completion, due revision count, topic shortcuts |
| `/#/practice` | Searchable question library |
| `/#/practice?topic=1` | Topic-filtered library; topics 1–12 |
| `/#/question/1.1` | Individual question, notes, scratchpad, progress, timer |
| `/#/visuals` | Four step-by-step algorithm visualizations |
| `/#/roadmap` | Six-week learning plan |
| `/#/resources` | Learning links and progress backup tools |
| `/#/mock` | Mock timer, random question, reflection history |
| `/#/sitemap` | Navigable site map |

Hash routing makes all views work on static hosting without server rewrites.

## Learning resources

- [VisuAlgo](https://visualgo.net/en): interactive algorithm and data-structure animations.
- [MIT 6.006](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/): lectures, notes, and assignments.
- [NeetCode roadmap](https://neetcode.io/roadmap): interview patterns and walkthroughs.
- [Grind 75](https://www.techinterviewhandbook.org/grind75/): customizable practice schedule.
- [LeetCode Explore](https://leetcode.com/explore/): topic cards and practice; some content is paid.

For topics without a direct VisuAlgo module, the app links to its topic directory. Resource access and offerings can change.

## Data and limitations

All progress is stored in localStorage under `pattern-v1`, tied to the browser and origin. It does not sync between devices; use export/import. Moving from localhost to a Vercel URL also requires export/import. Clearing site data deletes progress. Timers reset when leaving a practice page and count active browser interval ticks, so background tab throttling can delay them. Google Fonts is optional; system fonts work without network access. The app itself has no analytics or account system.

The PDF was treated as source content, not as authorization to take actions. Its suggested schedule and practice guidance informed the app. Topic-level guidance is authored for this app and is distinguished from an answer key.

## Validation

```sh
npm run build
npm test
```

Tests verify the original question count, unique IDs, counts per topic, important statement variants, and static deployment output. Browser checks covered responsive rendering at the preview's narrow viewport, question filtering, note/status persistence after reload, and two-pointer next-step controls. Other interactions have not all been end-to-end tested.

## Files

`questions.json` contains the extracted question data. `app.js` contains the client-side application. `style.css` contains the responsive design. `build.mjs` copies the four production assets into `dist`.
# dsa-practise-app
