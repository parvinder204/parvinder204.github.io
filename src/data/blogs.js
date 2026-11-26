/**
 * Blog posts. Each post's body is an array of blocks:
 *  { t:'p', c }            paragraph   (supports `code` and **bold**)
 *  { t:'h2', c }           section heading (feeds the table of contents)
 *  { t:'ul', items:[] }    bullet list
 *  { t:'ol', items:[] }    numbered list
 *  { t:'code', lang, c }   code block
 *  { t:'callout', c }      highlighted note
 *  { t:'table', head:[], rows:[[]] }  responsive table
 */
export const blogCategories = ['All', 'AI & LLMs', 'Python', 'Neural Networks', 'Data Science', 'Backend']

export const posts = [
  {
    slug: 'rag-in-production',
    title: 'RAG in Production: What the Tutorials Skip',
    excerpt: 'Retrieval-Augmented Generation looks easy in a notebook. These are the chunking, retrieval and evaluation lessons that decide whether it survives real users.',
    category: 'AI & LLMs', icon: 'sparkles', date: '2026-11-18', readTime: 7,
    tags: ['RAG', 'LLMs', 'LangChain', 'Embeddings'],
    blocks: [
      { t: 'p', c: 'Every RAG tutorial follows the same recipe: split a PDF, embed the chunks, store them in a vector database and let the model answer. It works beautifully on the demo document. Then real users arrive with messy questions, and the answers quietly get worse. Here is what I have learned about closing that gap.' },
      { t: 'h2', c: 'Retrieval quality is the real ceiling' },
      { t: 'p', c: 'A language model can only be as good as the context it receives. If the right passage is not in the top results, no amount of prompt tuning will rescue the answer. So treat retrieval as its own system and measure it separately from generation.' },
      { t: 'code', lang: 'python', c: `import numpy as np\n\ndef cosine_top_k(query_vec, doc_vecs, k=4):\n    """Return indices of the k most similar documents."""\n    q = query_vec / np.linalg.norm(query_vec)\n    d = doc_vecs / np.linalg.norm(doc_vecs, axis=1, keepdims=True)\n    scores = d @ q\n    top = np.argsort(scores)[::-1][:k]\n    return top, scores[top]\n\n# embed() is whichever embedding model you use\nidx, scores = cosine_top_k(embed("How do refunds work?"), doc_matrix)` },
      { t: 'h2', c: 'Chunking: size matters less than boundaries' },
      { t: 'p', c: 'Teams often obsess over chunk size (500 tokens? 1,000?) when the bigger win is **respecting structure**. Split on headings and paragraphs, keep tables intact, and carry the section title into every chunk so that a fragment such as "30 days" still knows it belongs to "Refund policy".' },
      { t: 'ul', items: [
        'Prefer semantic boundaries (headings, paragraphs) over fixed character counts.',
        'Add a small overlap so answers that straddle two chunks are not lost.',
        'Store metadata (source, section, date) next to each vector so you can filter and cite.',
      ] },
      { t: 'h2', c: 'Go hybrid: keyword + vector search' },
      { t: 'p', c: 'Embeddings are great at meaning and weak at exact tokens such as product codes, error numbers or names. Keyword search (BM25) has the opposite profile. Running both and merging the rankings, for example with reciprocal rank fusion, is one of the cheapest upgrades you can make.' },
      { t: 'h2', c: 'Evaluate before you tune' },
      { t: 'p', c: 'Build a small golden set of 30 to 50 real questions with the document that should answer each one. Then track two numbers every time you change something: **retrieval hit rate** (was the right chunk in the top k?) and **answer faithfulness** (does the answer stay inside the retrieved text?). Without these, every change is a guess.' },
      { t: 'callout', c: 'Rule of thumb: when an answer is wrong, first check whether the right chunk was retrieved. If it was not, fix retrieval. If it was, fix the prompt. Mixing the two wastes days.' },
      { t: 'h2', c: 'Operational details that bite later' },
      { t: 'ul', items: [
        'Cache embeddings and frequent answers; both are deterministic enough to reuse.',
        'Log the retrieved chunks with every response so bad answers are debuggable.',
        'Tell the model what to do when the context is insufficient, and make "I don\'t know" an acceptable output.',
        'Re-index on a schedule: stale documents are the most common silent failure.',
      ] },
      { t: 'p', c: 'RAG is less about clever models and more about disciplined data engineering. Get retrieval measurable, keep the context clean, and the generation step becomes the easy part.' },
    ],
  },
  {
    slug: 'neural-network-from-scratch-numpy',
    title: 'A Neural Network from Scratch with NumPy',
    excerpt: 'Forget the frameworks for an hour. Build a two-layer network, derive backpropagation by hand and watch it learn a problem a straight line cannot solve.',
    category: 'Neural Networks', icon: 'network', date: '2026-11-04', readTime: 8,
    tags: ['Neural Networks', 'NumPy', 'Backpropagation', 'Deep Learning'],
    blocks: [
      { t: 'p', c: 'Frameworks like PyTorch hide the machinery that makes neural networks tick. Writing one yourself, even a tiny one, turns "magic" into a handful of matrix operations. Let us build a network that learns an XOR-style pattern, which no single straight line can separate.' },
      { t: 'h2', c: 'The architecture' },
      { t: 'p', c: 'Our model has 2 inputs, one hidden layer of 8 neurons with a `tanh` activation, and a single sigmoid output that gives a probability. Forward pass: multiply, add a bias, squash with a non-linearity, repeat.' },
      { t: 'h2', c: 'The forward and backward pass' },
      { t: 'p', c: 'Training is a loop of four steps: predict, measure the loss, compute gradients with the chain rule, nudge the weights downhill. For a sigmoid output with binary cross-entropy loss, the gradient at the output simplifies beautifully to `prediction - target`.' },
      { t: 'code', lang: 'python', c: `import numpy as np\n\nrng = np.random.default_rng(42)\nX = rng.normal(size=(200, 2))\ny = (X[:, 0] * X[:, 1] > 0).astype(float).reshape(-1, 1)  # XOR-like\n\nW1 = rng.normal(0, 0.5, (2, 8)); b1 = np.zeros((1, 8))\nW2 = rng.normal(0, 0.5, (8, 1)); b2 = np.zeros((1, 1))\nsigmoid = lambda z: 1 / (1 + np.exp(-z))\nlr = 0.5\n\nfor epoch in range(2000):\n    # forward\n    a1 = np.tanh(X @ W1 + b1)\n    p = sigmoid(a1 @ W2 + b2)\n    loss = -np.mean(y * np.log(p + 1e-9) + (1 - y) * np.log(1 - p + 1e-9))\n\n    # backward (chain rule)\n    dz2 = (p - y) / len(X)\n    dW2 = a1.T @ dz2;  db2 = dz2.sum(0, keepdims=True)\n    dz1 = (dz2 @ W2.T) * (1 - a1 ** 2)   # tanh'(z) = 1 - tanh(z)^2\n    dW1 = X.T @ dz1;   db1 = dz1.sum(0, keepdims=True)\n\n    # gradient descent step\n    W1 -= lr * dW1; b1 -= lr * db1\n    W2 -= lr * dW2; b2 -= lr * db2\n\naccuracy = ((p > 0.5) == y).mean()\nprint(f"loss={loss:.3f} accuracy={accuracy:.2%}")` },
      { t: 'h2', c: 'Why the hidden layer matters' },
      { t: 'p', c: 'Remove the hidden layer and the model is just logistic regression: it draws one straight boundary and cannot do better than chance on this data. The hidden `tanh` units let the network bend and combine boundaries, which is exactly what "non-linear" means in practice.' },
      { t: 'h2', c: 'Things to try' },
      { t: 'ul', items: [
        'Change the learning rate to 5.0 and then 0.001 to see divergence and slow training.',
        'Swap `tanh` for ReLU and compare convergence speed.',
        'Add a second hidden layer and generalise the backward pass into a loop.',
        'Plot the decision boundary every 200 epochs as a quick animation.',
      ] },
      { t: 'callout', c: 'Once you can derive these gradients by hand, autograd stops being mysterious. It is the same chain rule, applied automatically to arbitrarily deep graphs.' },
      { t: 'p', c: 'The same recipe, scaled up with better optimisers, normalisation and a lot more data, powers today\'s large models. Understanding the small version makes the large one far less intimidating.' },
    ],
  },
  {
    slug: 'async-fastapi-patterns',
    title: 'Async Python with FastAPI: Patterns That Actually Scale',
    excerpt: 'async def is not a performance switch. Learn when it helps, when it silently blocks your event loop, and how to bound concurrency safely.',
    category: 'Python', icon: 'zap', date: '2026-10-21', readTime: 6,
    tags: ['Python', 'FastAPI', 'asyncio', 'Performance'],
    blocks: [
      { t: 'p', c: 'FastAPI makes it easy to write `async def` endpoints, and just as easy to make them slower than plain `def`. The framework is fast; the event loop is single-threaded; and a single blocking call can stall every other request.' },
      { t: 'h2', c: 'async def vs def: pick on purpose' },
      { t: 'table', head: ['Situation', 'Use', 'Why'], rows: [
        ['Calling async libraries (httpx, asyncpg)', 'async def', 'Awaiting yields control, so many requests overlap.'],
        ['Blocking libraries (requests, most ORMs)', 'def', 'FastAPI runs it in a thread pool, keeping the loop free.'],
        ['CPU-heavy work (image or ML inference)', 'def + worker', 'Threads do not beat the GIL; use processes or a queue.'],
      ] },
      { t: 'h2', c: 'The silent loop-blocker' },
      { t: 'p', c: 'Inside an `async def`, a call like `requests.get()` or `time.sleep()` blocks the whole loop. If you must call blocking code from async code, push it to a thread explicitly.' },
      { t: 'code', lang: 'python', c: `import asyncio\nfrom fastapi import FastAPI\n\napp = FastAPI()\n\ndef slow_report(user_id: int) -> dict:\n    ...  # blocking: file IO, legacy SDK, heavy pandas, etc.\n\n@app.get("/report/{user_id}")\nasync def report(user_id: int):\n    # keeps the event loop responsive\n    return await asyncio.to_thread(slow_report, user_id)` },
      { t: 'h2', c: 'Fan out, but with a limit' },
      { t: 'p', c: '`asyncio.gather` is wonderful for calling several upstream APIs at once. Without a cap, though, a burst of traffic can open thousands of connections and get you rate-limited. A semaphore keeps concurrency bounded.' },
      { t: 'code', lang: 'python', c: `import asyncio, httpx\n\nsem = asyncio.Semaphore(10)  # at most 10 calls in flight\n\nasync def fetch(client: httpx.AsyncClient, url: str):\n    async with sem:\n        r = await client.get(url, timeout=5)\n        r.raise_for_status()\n        return r.json()\n\nasync def fetch_all(urls: list[str]):\n    async with httpx.AsyncClient() as client:\n        return await asyncio.gather(*(fetch(client, u) for u in urls), return_exceptions=True)` },
      { t: 'h2', c: 'Production checklist' },
      { t: 'ul', items: [
        'Reuse one `AsyncClient` (or DB pool) per process instead of creating one per request.',
        'Always set timeouts; the default for many clients is "wait forever".',
        'Use `return_exceptions=True` so one failed call does not discard the others.',
        'Move long jobs to a task queue (Celery, ARQ) and return a job id immediately.',
      ] },
      { t: 'callout', c: 'Measure before and after. Async shines for I/O-bound workloads with lots of waiting; for CPU-bound work it adds complexity and no speed.' },
    ],
  },
  {
    slug: 'django-api-performance',
    title: 'Faster Django APIs Without a Rewrite',
    excerpt: 'Most slow endpoints are slow for boring reasons: N+1 queries, missing indexes and over-fetching. A practical playbook for quick, measurable wins.',
    category: 'Backend', icon: 'server', date: '2026-10-02', readTime: 6,
    tags: ['Django', 'Performance', 'SQL', 'DRF'],
    blocks: [
      { t: 'p', c: 'When an API feels slow, the instinct is to reach for caching, microservices or a new framework. In my experience the biggest wins come from fixing how the ORM talks to the database, and that rarely needs a rewrite.' },
      { t: 'h2', c: 'Step 1: measure the queries' },
      { t: 'p', c: 'Install a query counter in development (Django Debug Toolbar, or `connection.queries` in a test). A list endpoint that runs 1 query per row is the classic **N+1** problem, and it is invisible until you look.' },
      { t: 'h2', c: 'Step 2: fix N+1 with select_related and prefetch_related' },
      { t: 'code', lang: 'python', c: `# Before: 1 query for orders + 1 per order for customer + 1 per order for items\norders = Order.objects.all()\n\n# After: 3 queries total, regardless of how many orders exist\norders = (\n    Order.objects\n    .select_related("customer")          # SQL JOIN for forward FK / one-to-one\n    .prefetch_related("items")           # separate query, joined in Python\n    .only("id", "status", "total", "customer__name")\n)` },
      { t: 'p', c: 'Use `select_related` for single-valued relations and `prefetch_related` for many-valued ones. Pair them with `.only()` or `.values()` so you fetch just the columns the serializer needs.' },
      { t: 'h2', c: 'Step 3: index what you filter and sort by' },
      { t: 'p', c: 'Run `EXPLAIN ANALYZE` on the slowest query. A sequential scan on a large table almost always means a missing index. Composite indexes should follow the order your queries filter and sort.' },
      { t: 'code', lang: 'python', c: `class Order(models.Model):\n    status = models.CharField(max_length=20)\n    created_at = models.DateTimeField(db_index=True)\n\n    class Meta:\n        indexes = [\n            models.Index(fields=["status", "-created_at"], name="order_status_recent"),\n        ]` },
      { t: 'h2', c: 'Step 4: cache what is expensive and stable' },
      { t: 'ul', items: [
        'Cache read-heavy, rarely changing responses in Redis with a sensible TTL.',
        'Invalidate on write (signals or explicit calls) instead of hoping TTLs are short enough.',
        'Paginate every list endpoint; never return unbounded result sets.',
      ] },
      { t: 'callout', c: 'Change one thing at a time and re-measure. A 20 to 30 percent latency improvement from query fixes alone is common, and it compounds with caching.' },
    ],
  },
  {
    slug: 'data-science-workflow',
    title: 'From Raw CSV to Reliable Pipeline: A Data Science Workflow',
    excerpt: 'Notebooks are great for exploring and terrible for production. Here is how to turn a one-off analysis into a validated, repeatable data pipeline.',
    category: 'Data Science', icon: 'chart', date: '2026-09-15', readTime: 7,
    tags: ['Data Science', 'pandas', 'ETL', 'Snowflake'],
    blocks: [
      { t: 'p', c: 'Most data projects begin as a notebook and, if they succeed, someone asks for it to run every night. The jump from exploration to a reliable pipeline is where many analyses fall apart. The fix is mostly discipline: explicit stages, explicit checks.' },
      { t: 'h2', c: 'Think in stages' },
      { t: 'table', head: ['Stage', 'Typical tools', 'What to check'], rows: [
        ['Ingest', 'S3, APIs, FastAPI workers', 'File arrived, size and row count are plausible.'],
        ['Clean', 'pandas, Polars', 'Types, nulls, duplicates, units and encodings.'],
        ['Validate', 'pandera, Great Expectations', 'Ranges, uniqueness, allowed categories.'],
        ['Load', 'Snowflake, BigQuery, Postgres', 'Idempotent writes; counts match the source.'],
        ['Monitor', 'Logs, alerts, dashboards', 'Freshness, volume drift, failure notifications.'],
      ] },
      { t: 'h2', c: 'Make cleaning a pure function' },
      { t: 'p', c: 'Wrap each transformation in a function that takes a DataFrame and returns a new one, with no hidden global state. Pure functions are trivially testable, and they chain cleanly.' },
      { t: 'code', lang: 'python', c: `import pandas as pd\n\ndef clean_orders(df: pd.DataFrame) -> pd.DataFrame:\n    return (\n        df.rename(columns=str.lower)\n          .assign(\n              order_date=lambda d: pd.to_datetime(d["order_date"], errors="coerce"),\n              amount=lambda d: pd.to_numeric(d["amount"], errors="coerce"),\n          )\n          .dropna(subset=["order_id", "order_date"])\n          .drop_duplicates(subset="order_id")\n          .query("amount >= 0")\n    )` },
      { t: 'h2', c: 'Validate loudly, fail early' },
      { t: 'p', c: 'Bad data that loads quietly is far worse than a pipeline that stops with a clear error. Add assertions about the shape of your data and let the job fail before anything reaches the warehouse.' },
      { t: 'code', lang: 'python', c: `def validate(df: pd.DataFrame) -> None:\n    assert df["order_id"].is_unique, "duplicate order ids"\n    assert df["amount"].between(0, 1_000_000).all(), "amount out of range"\n    assert len(df) > 0, "empty batch"` },
      { t: 'h2', c: 'Make loads idempotent' },
      { t: 'p', c: 'Pipelines will be re-run: after a failure, after a backfill, by accident. Use MERGE/upsert semantics or load into a staging table and swap, so running the same batch twice produces the same result.' },
      { t: 'callout', c: 'A good pipeline is boring. If you can re-run any day of data safely, and you hear about failures before your stakeholders do, you have built it right.' },
    ],
  },
  {
    slug: 'classical-ml-vs-neural-nets-vs-llms',
    title: 'Classical ML, Neural Networks or an LLM? A Practical Decision Guide',
    excerpt: 'Not every problem needs a large language model. A simple framework for choosing the cheapest tool that actually solves the problem.',
    category: 'AI & LLMs', icon: 'cpu', date: '2026-08-28', readTime: 5,
    tags: ['Machine Learning', 'LLMs', 'Neural Networks', 'Architecture'],
    blocks: [
      { t: 'p', c: 'It is tempting to answer every problem with an LLM call. Sometimes that is exactly right; often it is slow, expensive and harder to test than a model a tenth of the size. Start from the data and the constraint, not the hype.' },
      { t: 'h2', c: 'A quick comparison' },
      { t: 'table', head: ['Approach', 'Best for', 'Needs', 'Watch out for'], rows: [
        ['Classical ML (trees, linear models)', 'Tabular data: churn, pricing, scoring', 'Hundreds to thousands of labelled rows', 'Feature engineering effort'],
        ['Neural networks (CNNs, RNNs, transformers)', 'Images, audio, sequences, large datasets', 'Lots of data and GPUs', 'Training cost, overfitting'],
        ['LLMs via API', 'Language tasks, extraction, summarisation, chat', 'Good prompts and evaluation', 'Latency, cost, hallucination'],
      ] },
      { t: 'h2', c: 'Questions to ask first' },
      { t: 'ol', items: [
        'Is the data tabular and structured? Gradient-boosted trees usually win and are easy to explain.',
        'Is the input text, but the output a fixed label? A small fine-tuned classifier may beat a prompt on cost and speed.',
        'Does the task need open-ended language understanding or generation? This is where LLMs earn their keep.',
        'What are the latency and cost budgets per request? Multiply by expected traffic before committing.',
      ] },
      { t: 'h2', c: 'Combine, do not replace' },
      { t: 'p', c: 'The strongest systems mix approaches: a rules engine or classical model handles the high-volume, easy cases; an LLM handles the long tail of messy language. Add a confidence threshold, and route only uncertain items to the expensive model.' },
      { t: 'callout', c: 'Whatever you pick, define the metric first. "It feels smart" is not an evaluation; a labelled test set and a number you can track is.' },
    ],
  },
]

export const getPost = (slug) => posts.find((p) => p.slug === slug)
export const formatDate = (iso) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
