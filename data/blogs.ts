export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  date: string;
  author: string;
  readingTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  // ============================================================
  // CATEGORY: Coffee & Culture (Posts 1-5)
  // ============================================================
  {
    title: "Best Specialty Coffee in Jaipur: Why Nuroh Stands Out",
    slug: "best-specialty-coffee-jaipur",
    excerpt: "Discover why Nuroh Cafe serves the best specialty coffee in Jaipur with single-origin beans, expert brewing, and a vibe that keeps you coming back.",
    content: `<p>Jaipur has come a long way from instant coffee sachets and sweet filter brews. Today, the Pink City hosts a growing wave of specialty coffee shops — but if you ask any serious coffee drinker where to find the best cup, the answer keeps coming back to Nuroh Cafe in C Scheme.</p>

<h2>What Makes Coffee "Specialty" — And Why It Matters</h2>
<p>Specialty coffee isn't just a marketing term. It refers to beans that score 80 or above on the Specialty Coffee Association's 100-point scale. These beans are grown at higher altitudes, harvested at peak ripeness, and processed with care that preserves their unique flavour profiles. At Nuroh Cafe, we source single-origin beans from estates in Chikmagalur, Coorg, and select international micro-lots. Every batch is freshly roasted in small quantities to ensure you taste the bean at its absolute best.</p>
<p>What does that mean for your cup? It means you'll notice flavour notes — berry-like acidity from an Ethiopian Yirgacheffe, chocolate and nutty undertones from an Indian Attikan estate, or the bright citrus punch of a Kenyan AA. These aren't flavours added artificially; they're naturally present in well-grown, well-roasted coffee.</p>

<h2>The Nuroh Difference: Sourcing, Roasting, Brewing</h2>
<p>Most cafes in Jaipur use commercial-grade beans roasted months ago. At Nuroh, our approach is different at every step:</p>
<ul>
<li><strong>Direct relationships with farms:</strong> We work closely with coffee estates to select lots that meet our quality standards. This also means farmers get paid fairly — something we care deeply about.</li>
<li><strong>In-house roast profiling:</strong> Our roast profiles are developed specifically for each origin. A washed Ethiopian gets a lighter roast to preserve floral notes, while a natural-process Indian Monsoon Malabar gets a medium roast to highlight its earthy body.</li>
<li><strong>Multiple brew methods:</strong> Whether you prefer a clean pour-over, a rich espresso, a smooth cold brew, or a creamy flat white, our baristas are trained to extract the best from every method.</li>
</ul>
<p>This attention to detail is what separates Nuroh from the dozens of cafes that opened in Jaipur over the last few years. We're not just serving coffee — we're serving craft.</p>

<h2>Our Most Popular Specialty Drinks</h2>
<p>First-timers at Nuroh often ask what to order. Here are the crowd favourites that keep people coming back:</p>
<ul>
<li><strong>Single Origin Pour Over:</strong> Rotated seasonally. Ask your barista what's brewing today — they love talking about it.</li>
<li><strong>Signature Nuroh Latte:</strong> Our espresso pulled with precision, paired with silky steamed milk and finished with latte art that's almost too pretty to drink.</li>
<li><strong>Cold Brew on Tap:</strong> Steeped for 18 hours, served straight or with a splash of tonic water for a refreshing twist.</li>
<li><strong>Cortado:</strong> Equal parts espresso and steamed milk — bold, balanced, and perfect for anyone who wants flavour without the volume.</li>
</ul>

<h2>More Than Just a Cup — It's an Experience</h2>
<p>Great coffee deserves a great setting. Nuroh Cafe in C Scheme, Jaipur, is designed to be a space where you can slow down. Natural light, comfortable seating, a curated playlist, and a team that genuinely loves what they do. Whether you're working on your laptop, catching up with a friend, or just taking 20 minutes for yourself, the environment elevates the experience.</p>
<p>We also host regular coffee tasting sessions and brewing workshops for anyone who wants to learn more about what goes into their cup. It's one of the ways we're building a real coffee culture in Jaipur — not just selling drinks.</p>

<p>If you haven't tried specialty coffee yet, or if you've been disappointed by cafes that promise quality but deliver average brews, come visit Nuroh Cafe. We're at C Scheme, Jaipur — open every day. Your perfect cup is waiting.</p>`,
    category: "Coffee & Culture",
    tags: ["specialty coffee jaipur", "best coffee jaipur", "nuroh cafe", "third wave coffee", "C Scheme cafe"],
    date: "2026-03-15",
    author: "Nuroh Team",
    readingTime: "5 min read",
    image: "https://blog.nuroh.in/images/best-specialty-coffee-jaipur.jpg",
  },
  {
    title: "The Ultimate Guide to Pour Over Coffee at Nuroh Cafe Jaipur",
    slug: "pour-over-coffee-guide-nuroh",
    excerpt: "Learn everything about pour over coffee — the method, the magic, and why Nuroh Cafe Jaipur brews the best hand-poured cups in the city.",
    content: `<p>There's something almost meditative about watching a barista make pour over coffee. The slow, circular pour. The bloom of grounds releasing CO2. The steady drip of liquid gold into the carafe below. At Nuroh Cafe in Jaipur, pour over isn't just a menu item — it's a ritual, and one of the best ways to experience what specialty coffee truly tastes like.</p>

<h2>What Exactly Is Pour Over Coffee?</h2>
<p>Pour over is a manual brewing method where hot water is poured over freshly ground coffee in a slow, controlled stream. The water passes through the grounds and a paper or metal filter, extracting flavours as it drips into a cup or carafe below. Unlike espresso, which uses pressure, or French press, which uses immersion, pour over relies on gravity and technique.</p>
<p>The result? A remarkably clean, flavourful cup that highlights the unique characteristics of the bean. You'll taste subtle notes — floral, fruity, chocolatey, nutty — that get lost in other brewing methods. It's coffee in its purest form.</p>

<h2>How We Brew Pour Over at Nuroh</h2>
<p>At Nuroh Cafe, our baristas follow a precise process for every pour over cup:</p>
<ul>
<li><strong>Bean selection:</strong> We rotate our single-origin offerings seasonally. Right now, you might find a washed Ethiopian Sidamo or an Indian estate lot from Chikmagalur. Ask your barista — they'll walk you through what's available.</li>
<li><strong>Grind size:</strong> We grind beans fresh for every order. Pour over requires a medium-fine grind — coarser than espresso, finer than French press. The consistency matters enormously, which is why we use a commercial burr grinder calibrated daily.</li>
<li><strong>Water temperature:</strong> Between 92 and 96 degrees Celsius. Too hot and you extract bitterness; too cool and the coffee tastes flat and sour.</li>
<li><strong>The bloom:</strong> A small initial pour of water saturates the grounds and allows trapped CO2 to escape. This step lasts about 30 seconds and ensures even extraction in the main pour.</li>
<li><strong>Slow spiral pour:</strong> The remaining water is added in a slow, circular motion over 3 to 4 minutes. Our baristas control the flow rate to ensure consistent extraction from the centre to the edges of the coffee bed.</li>
</ul>
<p>The whole process takes about 4 to 5 minutes. Yes, it's slower than pulling an espresso shot. But the depth of flavour you get is worth every second of the wait.</p>

<h2>Pour Over vs Other Methods: Why Choose It?</h2>
<p>If you normally drink lattes or cappuccinos, a pour over might surprise you. There's no milk to mask the flavour — it's just coffee and water. That honesty is what makes it special. Here's how it compares:</p>
<ul>
<li><strong>vs Espresso:</strong> Espresso is intense and concentrated. Pour over is lighter-bodied but more nuanced in flavour.</li>
<li><strong>vs French Press:</strong> French press produces a heavier, oilier cup because of the metal filter. Pour over with a paper filter gives you a cleaner, brighter taste.</li>
<li><strong>vs Cold Brew:</strong> Cold brew is smooth and sweet from the long steep, but pour over reveals more complexity and acidity in the bean.</li>
</ul>
<p>We always recommend pour over to customers who say they want to "really taste" the coffee. It's the most transparent way to experience a bean's personality.</p>

<h2>Try It at Nuroh — Here's What to Expect</h2>
<p>When you order a pour over at Nuroh Cafe, your barista will tell you about the bean — where it's from, how it was processed, and what flavour notes to expect. You'll watch it being brewed right at the bar. And when you take that first sip, give it a moment. Let it cool slightly. Taste it without sugar first. You might be surprised by what you find.</p>

<p>Whether you're a seasoned coffee nerd or someone who's never tried anything beyond a cappuccino, pour over at Nuroh Cafe Jaipur is an experience worth having. Drop by our C Scheme location and ask for the pour over of the day — your barista will take it from there.</p>`,
    category: "Coffee & Culture",
    tags: ["pour over coffee", "manual brew coffee", "nuroh cafe jaipur", "specialty coffee", "coffee guide"],
    date: "2026-03-10",
    author: "Nuroh Team",
    readingTime: "5 min read",
    image: "https://blog.nuroh.in/images/pour-over-coffee-guide-nuroh.jpg",
  },
  {
    title: "Cold Brew vs Iced Coffee: What to Order at Nuroh Cafe",
    slug: "cold-brew-vs-iced-coffee-nuroh",
    excerpt: "Cold brew or iced coffee? Learn the real difference and find out which one suits your taste at Nuroh Cafe Jaipur.",
    content: `<p>Jaipur summers don't mess around. When the mercury crosses 40 degrees, a hot cup of coffee is the last thing on anyone's mind. That's when cold coffee drinks take centre stage — and at Nuroh Cafe, two options dominate the menu: cold brew and iced coffee. They sound similar, they look similar, but they are fundamentally different drinks. Here's everything you need to know to make the right choice.</p>

<h2>The Basics: How Each One Is Made</h2>
<p>The biggest difference between cold brew and iced coffee comes down to how they're brewed.</p>
<p><strong>Iced coffee</strong> is exactly what it sounds like — regular hot-brewed coffee that's cooled down and served over ice. At Nuroh, we brew it double-strength so the ice doesn't water it down. You get a familiar coffee flavour with a refreshing chill.</p>
<p><strong>Cold brew</strong>, on the other hand, never touches hot water. Coarsely ground coffee is steeped in cold or room-temperature water for 16 to 20 hours. At Nuroh Cafe, our cold brew steeps for a full 18 hours before being filtered and served. This slow extraction pulls out the sweet, smooth, chocolatey compounds in the bean while leaving most of the bitter acids behind.</p>
<p>Same beans, same cafe, completely different drinks.</p>

<h2>Flavour Profiles: What You'll Actually Taste</h2>
<p>This is where the choice really matters:</p>
<ul>
<li><strong>Iced coffee</strong> tends to have brighter acidity and a more traditional coffee taste. If you like your coffee with a bit of a bite — that tangy, slightly sharp quality — iced coffee delivers. It's crisp and refreshing, especially with a splash of milk.</li>
<li><strong>Cold brew</strong> is smoother, naturally sweeter, and has a richer, almost velvety body. Because the low-temperature extraction doesn't pull out as many acidic compounds, it tastes less bitter. Many people who find regular coffee too harsh discover they love cold brew.</li>
</ul>
<p>At Nuroh, our cold brew has notes of dark chocolate and caramel — no sugar added, that's just the natural flavour of the bean when brewed this way. Our iced coffee, brewed with our house blend, has a brighter, more citrusy profile.</p>

<h2>Caffeine Content: Which One Packs More Punch?</h2>
<p>Here's a fact that surprises most people: cold brew typically has more caffeine than iced coffee. The long steeping time extracts more caffeine from the grounds. At Nuroh, our cold brew concentrate is diluted slightly before serving, but it still packs a stronger caffeine punch than our iced coffee.</p>
<p>If you need a serious energy boost for a long work session or a study marathon, cold brew is your friend. If you want something lighter that you can sip through the afternoon, iced coffee might be the better call.</p>

<h2>How to Customise Your Cold Drink at Nuroh</h2>
<p>Both drinks are great on their own, but we offer several ways to make them your own:</p>
<ul>
<li><strong>Cold Brew + Tonic Water:</strong> A Nuroh favourite. The tonic's quinine bitterness pairs beautifully with the smooth cold brew. It's fizzy, refreshing, and unlike anything you've tried.</li>
<li><strong>Iced Coffee with Oat Milk:</strong> Creamy, slightly sweet, and dairy-free. Oat milk is the best plant milk pairing for iced coffee, and our baristas agree.</li>
<li><strong>Cold Brew with Vanilla:</strong> A house-made vanilla syrup adds just a touch of sweetness without overpowering the coffee. Perfect for anyone transitioning from sugary blended drinks.</li>
<li><strong>Classic Iced Latte:</strong> Two shots of espresso, cold milk, ice. Simple, effective, and always satisfying.</li>
</ul>

<h2>The Verdict: Which Should You Order?</h2>
<p>There's no wrong answer here, but here's a quick guide. Choose <strong>cold brew</strong> if you prefer smooth, low-acid, naturally sweet coffee with a stronger caffeine kick. Choose <strong>iced coffee</strong> if you like brighter, more traditional coffee flavour and want something lighter.</p>

<p>Still not sure? Come to Nuroh Cafe in C Scheme, Jaipur, and ask for a tasting. Our baristas are happy to let you try both before you decide. That's the kind of cafe we are — we'd rather you love what you order than just settle for something off the menu.</p>`,
    category: "Coffee & Culture",
    tags: ["cold brew jaipur", "iced coffee", "nuroh cafe", "summer coffee drinks", "cold coffee jaipur"],
    date: "2026-03-05",
    author: "Nuroh Team",
    readingTime: "5 min read",
    image: "https://blog.nuroh.in/images/cold-brew-vs-iced-coffee-nuroh.jpg",
  },
  {
    title: "Latte Art Culture in Jaipur: Behind the Counter at Nuroh",
    slug: "latte-art-culture-jaipur-nuroh",
    excerpt: "Go behind the counter at Nuroh Cafe Jaipur to explore the craft of latte art — from rosettas to tulips and the baristas who pour them.",
    content: `<p>You've seen them on Instagram — those perfectly symmetrical hearts, fern-like rosettas, and multi-layered tulips sitting on top of a latte. Latte art has become a hallmark of the specialty coffee experience worldwide, and in Jaipur, Nuroh Cafe has become the place where this craft is taken seriously. But what does it actually take to pour a beautiful design into your cup? We went behind the counter to find out.</p>

<h2>More Than Decoration: Why Latte Art Matters</h2>
<p>Let's get one thing straight — latte art isn't just about looking pretty for photos. A well-poured design is actually an indicator of quality. Here's why:</p>
<ul>
<li><strong>Proper milk texture:</strong> To pour latte art, the milk needs to be steamed to a microfoam consistency — silky, glossy, with tiny bubbles that are almost invisible. If the milk is too frothy, too hot, or not textured correctly, the design won't hold. So when you see a clean rosetta in your cup, it means the milk was steamed right.</li>
<li><strong>Good espresso extraction:</strong> The crema on top of the espresso acts as the canvas. If the espresso is poorly extracted — too fast, too slow, or from stale beans — the crema will be thin and the art won't show. A vibrant, lasting design means the shot was pulled well.</li>
<li><strong>Barista skill:</strong> Pouring latte art requires steady hands, the right pouring height, the correct speed, and muscle memory built over thousands of cups. It's a craft that takes months to learn and years to master.</li>
</ul>
<p>At Nuroh Cafe, we see latte art as the final quality check. If the art looks good, everything underneath it — the espresso, the milk, the technique — is on point.</p>

<h2>Meet the Baristas Behind the Pour</h2>
<p>Our barista team at Nuroh doesn't just learn recipes — they train in technique. Every barista goes through a structured programme that covers espresso extraction theory, milk steaming science, and latte art fundamentals before they're cleared to work the machine during service.</p>
<p>Practice sessions happen daily. Before the cafe opens, you'll find our team steaming pitcher after pitcher, perfecting their pours. The progression is always the same: heart first, then rosetta, then tulip, then free-pour combinations. Some of our baristas can now pour swans, peacocks, and layered designs that genuinely stop people mid-scroll on social media.</p>
<p>But ask any of them, and they'll tell you: the heart is still the hardest to pour perfectly. It requires absolute control and a confident wrist flick at the end. A sloppy heart is harder to hide than a slightly off rosetta.</p>

<h2>Jaipur's Growing Latte Art Scene</h2>
<p>Three or four years ago, latte art in Jaipur was rare. Most cafes served coffee with a dollop of foam on top and called it a day. The idea of free-pouring designs seemed like something that only happened in Melbourne or Tokyo. That's changed dramatically.</p>
<p>Today, a handful of cafes in Jaipur — Nuroh leading among them — take milk-based drinks seriously. There's an unspoken competition among baristas across the city, and we love it. It pushes everyone to get better. Some of our team members have participated in latte art throwdowns in Delhi and Mumbai, bringing back techniques and inspiration that elevate the whole Jaipur coffee scene.</p>

<h2>Want to Learn? We'll Teach You</h2>
<p>One of the things we're most proud of at Nuroh is our community workshops. Every few weeks, we host a latte art session where anyone — complete beginners included — can try their hand at steaming milk and pouring designs. You'll learn how to hold the pitcher, how to position the cup, and how to control the pour speed. Most people manage a recognisable heart by the end of the session, and the look on their faces is always priceless.</p>
<p>These workshops fill up quickly, so keep an eye on our Instagram for announcements.</p>

<p>Next time you're at Nuroh Cafe in C Scheme, Jaipur, take a moment before you sip your latte. Look at the design. That rosetta in your cup represents hours of practice, quality beans, and a barista who genuinely cares about what they serve you. And if you want to see how it's done, just ask — our team loves showing off a little.</p>`,
    category: "Coffee & Culture",
    tags: ["latte art jaipur", "barista culture", "nuroh cafe", "specialty coffee", "coffee craft"],
    date: "2026-02-28",
    author: "Nuroh Team",
    readingTime: "5 min read",
    image: "https://blog.nuroh.in/images/latte-art-culture-jaipur-nuroh.jpg",
  },
  {
    title: "Why Jaipur's Coffee Scene is Booming — And Nuroh is Leading It",
    slug: "jaipur-coffee-scene-nuroh",
    excerpt: "Jaipur's coffee scene has exploded in the last few years. Here's why — and how Nuroh Cafe is at the forefront of the city's third wave coffee movement.",
    content: `<p>If you told someone in 2018 that Jaipur would have a thriving specialty coffee culture, they'd have laughed. This was a city of chai tapris and sweet lassi, where coffee meant Nescafe stirred into hot milk. Fast forward to 2026, and the Pink City is in the middle of a genuine coffee revolution. Specialty roasters, pour-over bars, latte art throwdowns — it's all happening here. And at Nuroh Cafe, we've had a front-row seat to the transformation.</p>

<h2>What Changed? The Perfect Storm</h2>
<p>Several factors came together to ignite Jaipur's coffee boom:</p>
<ul>
<li><strong>The remote work explosion:</strong> Post-2020, thousands of young professionals, freelancers, and startup founders set up in Jaipur. They came from Bangalore, Mumbai, Delhi — cities where specialty coffee was already mainstream. They brought their coffee expectations with them, and the market responded.</li>
<li><strong>Social media influence:</strong> Instagram and YouTube made coffee culture aspirational. Suddenly, knowing the difference between a flat white and a cappuccino was a social currency. Cafes with good aesthetics and real quality started getting organic traction online.</li>
<li><strong>Rising disposable income:</strong> Jaipur's young population — students, entrepreneurs, creative professionals — is willing to spend on experiences. A Rs 300 specialty latte isn't seen as extravagant anymore; it's seen as a treat worth having.</li>
<li><strong>Indian coffee growing up:</strong> India's own coffee industry has matured. Estates in Karnataka, Kerala, and Tamil Nadu are producing world-class beans that rival anything from Ethiopia or Colombia. This made it easier for cafes to source quality without depending entirely on imports.</li>
</ul>

<h2>From Chai City to Coffee City</h2>
<p>Let's be clear — Jaipur hasn't abandoned chai, and it never should. Chai is woven into the city's DNA. But coffee has carved out its own space, not as a replacement, but as an addition. Many of our regular customers at Nuroh start their day with chai at home and come to us for their afternoon coffee ritual. The two coexist beautifully.</p>
<p>What's exciting is that Jaipur's coffee scene isn't just copying what Bangalore or Mumbai did. It's developing its own personality. Cafes here tend to be more spacious, more community-oriented, and more experimental with Indian flavour fusions. You'll find filter coffee meets masala, cold brew meets kokum, espresso meets jaggery. It's distinctly Jaipur.</p>

<h2>Where Nuroh Fits In</h2>
<p>When we opened Nuroh Cafe in C Scheme, our goal wasn't just to serve good coffee. It was to build a space where coffee culture could grow. That meant:</p>
<ul>
<li><strong>Educating, not gatekeeping:</strong> We never judge someone for asking what a cortado is. Our baristas explain every drink, every brew method, every bean origin with genuine enthusiasm. We want people to learn and explore, not feel intimidated.</li>
<li><strong>Investing in people:</strong> Our barista training programme is one of the most rigorous in the city. We send team members to national workshops, fund their participation in competitions, and create a career path within the cafe — not just a job.</li>
<li><strong>Community events:</strong> From coffee cuppings to brewing workshops to open mic nights, Nuroh has become a gathering point for Jaipur's creative and professional communities. The cafe isn't just where you drink coffee — it's where things happen.</li>
<li><strong>Quality without compromise:</strong> We've never cut corners on beans, equipment, or training. Our La Marzocca machine, our single-origin offerings, our hand-poured V60s — everything is set up to deliver the best possible cup.</li>
</ul>

<h2>What's Next for Jaipur Coffee?</h2>
<p>The next few years will be defining for Jaipur's coffee scene. We expect to see more micro-roasters setting up locally, more cafes investing in barista education, and a growing consumer base that understands and appreciates quality. Competition will increase, and that's a good thing — it raises everyone's game.</p>

<p>If you want to be part of this movement, start by visiting Nuroh Cafe in C Scheme, Jaipur. Try a single-origin pour over. Chat with our baristas. Attend a workshop. Jaipur's coffee story is still being written, and every cup you choose to drink with intention is a page in that story.</p>`,
    category: "Coffee & Culture",
    tags: ["jaipur coffee scene", "third wave coffee india", "nuroh cafe", "specialty coffee culture", "cafes in jaipur"],
    date: "2026-02-20",
    author: "Nuroh Team",
    readingTime: "5 min read",
    image: "https://blog.nuroh.in/images/jaipur-coffee-scene-nuroh.jpg",
  },

  // ============================================================
  // CATEGORY: Food & Brunch (Posts 6-10)
  // ============================================================
  {
    title: "Best Brunch Spots in Jaipur: Nuroh Cafe's Complete Guide",
    slug: "best-brunch-spots-jaipur",
    excerpt: "Looking for the best brunch in Jaipur? Here's our honest guide to the city's top brunch spots — including what makes Nuroh Cafe a local favourite.",
    content: `<p>Brunch in Jaipur has gone from a niche weekend trend to a full-blown cultural institution. Every Saturday and Sunday, the city's best cafes and restaurants fill up with friends catching up over eggs, coffee, and way too many Instagram photos. If you're trying to figure out where to spend your next lazy weekend morning, here's our honest guide to the best brunch spots in Jaipur — and yes, we're including ourselves, because we genuinely believe we've earned the spot.</p>

<h2>What Makes a Great Brunch Spot?</h2>
<p>Before we get into the list, let's talk about what actually matters for brunch. It's not just about the food (though that's obviously important). A great brunch spot needs:</p>
<ul>
<li><strong>Consistent food quality:</strong> Not just one viral dish — the whole menu needs to deliver.</li>
<li><strong>Good coffee:</strong> Brunch without great coffee is just a late breakfast. This is non-negotiable.</li>
<li><strong>Comfortable ambiance:</strong> You're going to be there for an hour or two. The lighting, seating, music, and overall vibe matter.</li>
<li><strong>Reasonable wait times:</strong> Nothing kills a brunch mood faster than waiting 45 minutes for a table and another 30 for food.</li>
</ul>

<h2>Our Top Picks for Brunch in Jaipur</h2>
<p><strong>Nuroh Cafe, C Scheme:</strong> We'll start with home turf. Our brunch menu features everything from classic eggs Benedict and fluffy pancakes to our signature avocado toast and Mediterranean-inspired plates. The coffee is specialty-grade, the portions are generous, and the space is designed for lingering. Weekend brunch at Nuroh starts at 9 AM, and we recommend coming before 11 to beat the rush.</p>
<p><strong>Tapri Central, C Scheme:</strong> A Jaipur institution. Tapri does a great job with its all-day breakfast menu, and the rooftop seating with fort views is hard to beat. Their masala omelette and bun maska combo is comfort food at its finest.</p>
<p><strong>Curious Life Coffee Roasters, Vaishali Nagar:</strong> If you're in the western part of the city, Curious Life is a solid choice. Their avocado toast and cold brew are reliable, and the minimalist decor makes for a calm morning.</p>
<p><strong>Palladio, Narain Niwas Palace:</strong> For a splurge-worthy brunch, Palladio's Italian-inspired menu in a stunning heritage setting is unmatched. Think truffle eggs, fresh focaccia, and bellinis. It's pricey, but the experience justifies it for a special occasion.</p>
<p><strong>The Cafe at Baradari, City Palace:</strong> Another heritage option with a more accessible price point. The setting inside City Palace is magical, especially during winter. Their eggs Florentine and fresh juices make for a royal morning.</p>

<h2>What to Order for the Perfect Brunch</h2>
<p>A well-rounded brunch order typically has three components: something savoury, something sweet, and great coffee. Here's a sample Nuroh brunch order that we'd recommend:</p>
<ul>
<li>Start with a <strong>flat white or pour-over coffee</strong> to wake up your palate.</li>
<li>Order the <strong>Nuroh avocado toast</strong> — sourdough, smashed avo, poached eggs, chilli flakes, and a drizzle of good olive oil.</li>
<li>Add a side of <strong>blueberry pancakes</strong> if you have a sweet tooth, or the <strong>Mediterranean bowl</strong> if you want something lighter and healthier.</li>
<li>Finish with a <strong>fresh juice or iced matcha</strong> to round things out.</li>
</ul>

<h2>Tips for the Best Brunch Experience</h2>
<p>A few practical tips for brunching in Jaipur:</p>
<ul>
<li><strong>Go early on weekends:</strong> The 9 to 10 AM window is the sweet spot. By 11:30, most good brunch spots have a wait.</li>
<li><strong>Weekday brunches are underrated:</strong> If your schedule allows, a Tuesday brunch is the same food with zero crowd.</li>
<li><strong>Don't skip coffee:</strong> A lot of people order juice only. Big mistake. Jaipur has amazing coffee now — take advantage of it.</li>
<li><strong>Share plates:</strong> Order one savoury and one sweet between two people. You get to try more without overspending.</li>
</ul>

<p>Ready for your next brunch date? Nuroh Cafe in C Scheme, Jaipur, is open every day from 9 AM. Walk in, grab a table, and let us make your weekend morning a little more special.</p>`,
    category: "Food & Brunch",
    tags: ["best brunch jaipur", "brunch spots jaipur", "weekend brunch", "nuroh cafe", "jaipur food guide"],
    date: "2026-03-12",
    author: "Nuroh Team",
    readingTime: "5 min read",
    image: "https://blog.nuroh.in/images/best-brunch-spots-jaipur.jpg",
  },
  {
    title: "What to Eat at Nuroh Cafe Jaipur: Our Menu Favorites",
    slug: "what-to-eat-nuroh-cafe-jaipur",
    excerpt: "Not sure what to order at Nuroh Cafe? Here are our most popular dishes and drinks — a menu guide from the people who make it.",
    content: `<p>Walking into a cafe with a packed menu can be overwhelming, especially if it's your first visit. At Nuroh Cafe in C Scheme, Jaipur, we've spent months perfecting every item on our menu — but we know that sometimes you just want someone to point you in the right direction. So here's an honest guide to our most popular dishes and drinks, straight from the team that makes them.</p>

<h2>The Coffee Essentials</h2>
<p>Let's start with what brings most people through our doors — the coffee.</p>
<ul>
<li><strong>Flat White (Rs 280):</strong> Our best-seller, and for good reason. Double ristretto shots with velvety steamed milk. It's bold without being bitter, creamy without being heavy. If you only try one coffee drink at Nuroh, make it this.</li>
<li><strong>Cold Brew (Rs 300):</strong> Steeped for 18 hours and served over ice. Naturally sweet, incredibly smooth, with dark chocolate notes. During summer, this outsells everything else on the menu.</li>
<li><strong>Single Origin Pour Over (Rs 320):</strong> For the curious drinker. We rotate our single-origin beans seasonally — ask your barista what's currently on offer and let them brew you something special.</li>
<li><strong>Iced Matcha Latte (Rs 260):</strong> Not everyone wants coffee, and that's fine. Our ceremonial-grade matcha, whisked properly and served with your choice of milk over ice, is a beautiful alternative.</li>
</ul>

<h2>Breakfast & Brunch Hits</h2>
<p>Our kitchen opens at 9 AM, and the breakfast menu runs until 12 PM. Here's what regulars keep coming back for:</p>
<p><strong>The Nuroh Avocado Toast:</strong> This is the dish that put us on the map. Thick-cut sourdough from a local bakery, perfectly ripe smashed avocado, two poached eggs with runny yolks, cherry tomatoes, chilli flakes, microgreens, and a drizzle of extra virgin olive oil. It's filling, photogenic, and genuinely delicious. Pair it with a flat white for the quintessential Nuroh breakfast.</p>
<p><strong>Eggs Benedict:</strong> English muffins, Canadian bacon, poached eggs, and house-made hollandaise. Our kitchen team makes the hollandaise from scratch every morning — no packets, no shortcuts. The sauce is buttery, tangy, and perfectly balanced.</p>
<p><strong>Blueberry Pancakes:</strong> Fluffy buttermilk pancakes loaded with fresh blueberries, served with maple syrup and a side of whipped cream. This is pure comfort food, and it's one of the most ordered dishes on weekends.</p>

<h2>Lunch & All-Day Favourites</h2>
<p>Beyond breakfast, our all-day menu has options that work for a quick lunch or a leisurely afternoon meal:</p>
<ul>
<li><strong>Mediterranean Bowl:</strong> Quinoa, hummus, roasted vegetables, feta cheese, olives, and a lemon-herb dressing. It's our healthiest option and one of our most popular — proof that eating well doesn't have to be boring.</li>
<li><strong>Grilled Chicken Sandwich:</strong> Herb-marinated chicken breast, arugula, sun-dried tomatoes, and garlic aioli on ciabatta. Simple ingredients, executed well.</li>
<li><strong>Margherita Flatbread:</strong> Thin, crispy flatbread with fresh mozzarella, basil, and our house tomato sauce. Great as a shared starter or a light meal on its own.</li>
<li><strong>Caesar Salad:</strong> Romaine lettuce, house-made croutons, parmesan shavings, and a classic Caesar dressing. Add grilled chicken for a more filling option.</li>
</ul>

<h2>Sweet Endings</h2>
<p>Our dessert selection is small but intentional:</p>
<ul>
<li><strong>New York Cheesecake:</strong> Dense, creamy, with a buttery biscuit base. Served with a berry compote that cuts through the richness perfectly.</li>
<li><strong>Chocolate Brownie:</strong> Fudgy, not cakey. Served warm with a scoop of vanilla ice cream. This plus an espresso is the ultimate post-lunch combination.</li>
</ul>

<p>The best way to explore our menu is to come hungry and bring a friend so you can share. Nuroh Cafe in C Scheme, Jaipur, is open every day. Walk in, grab a seat, and let us feed you well.</p>`,
    category: "Food & Brunch",
    tags: ["nuroh cafe menu", "what to eat jaipur", "cafe food jaipur", "brunch menu", "C Scheme restaurants"],
    date: "2026-03-08",
    author: "Nuroh Team",
    readingTime: "5 min read",
    image: "https://blog.nuroh.in/images/what-to-eat-nuroh-cafe-jaipur.jpg",
  },
  {
    title: "Top 10 Breakfast Spots in Jaipur Every Foodie Must Try",
    slug: "top-breakfast-spots-jaipur",
    excerpt: "From pyaaz kachori to avocado toast — here are the 10 best breakfast spots in Jaipur that every foodie needs on their list.",
    content: `<p>Jaipur's breakfast culture is one of the most diverse in India. On any given morning, you can choose between a piping hot pyaaz kachori at a decades-old shop, a sophisticated eggs Benedict at a modern cafe, or a traditional Rajasthani dal baati served by a roadside vendor. The city doesn't make you pick a lane — it lets you have it all. Here are ten breakfast spots that represent the best of what Jaipur has to offer.</p>

<h2>Traditional Jaipur Breakfast Classics</h2>
<p><strong>1. Rawat Mishthan Bhandar, Station Road:</strong> No Jaipur breakfast list is complete without Rawat. Their pyaaz kachori is legendary — flaky, onion-stuffed, and best enjoyed fresh from the fryer with a side of tangy chutney. Get there before 9 AM or face a queue that wraps around the block.</p>
<p><strong>2. Laxmi Mishthan Bhandar (LMB), Johari Bazaar:</strong> A heritage restaurant that's been serving since 1954. Their ghee-loaded aloo puri and malpua breakfast combo is indulgent, rich, and absolutely Rajasthani. Perfect for when you want a traditional morning feast.</p>
<p><strong>3. Samrat Restaurant, MI Road:</strong> Known for their chole bhature and poha — simple, affordable, and consistently good. It's where Jaipur's working class starts their day, and for good reason.</p>
<p><strong>4. Sharma Tea Stall, Chaura Rasta:</strong> Not a restaurant but a Jaipur institution. Bread omelette and chai at Sharma's is a ritual for thousands of Jaipurites. The omelette is fluffy, well-spiced, and costs less than you'd spend on a single espresso elsewhere. Pair it with their cutting chai.</p>

<h2>Modern Cafe Breakfasts</h2>
<p><strong>5. Nuroh Cafe, C Scheme:</strong> Our home turf. Nuroh represents the best of Jaipur's modern breakfast scene. The avocado toast with poached eggs is the signature, but the eggs Benedict, blueberry pancakes, and Mediterranean breakfast bowl all deserve your attention. What sets Nuroh apart is the coffee — every breakfast is paired with specialty-grade brews that most Jaipur cafes simply can't match. If you're someone who believes breakfast isn't complete without a properly made flat white, this is your spot.</p>
<p><strong>6. Curious Life Coffee Roasters, Vaishali Nagar:</strong> Good coffee and a simple, well-executed breakfast menu. Their granola bowl and cold brew combo is a clean, healthy way to start the day.</p>
<p><strong>7. Tapri Central, C Scheme:</strong> Their bun maska and chai combination is nostalgic and comforting. The breakfast section also has a solid masala omelette and paratha options. The rooftop view doesn't hurt either.</p>

<h2>Hotel Breakfasts Worth the Splurge</h2>
<p><strong>8. Steam at Rambagh Palace:</strong> If you want to experience royalty for breakfast, the buffet at Rambagh Palace's Steam restaurant is extraordinary. Live dosa stations, freshly baked pastries, international options, and a setting that makes you feel like Rajasthani royalty. It's expensive, but it's an experience.</p>
<p><strong>9. The Verandah at Samode Haveli:</strong> A boutique heritage property with a breakfast spread that balances Indian and continental perfectly. Their fresh fruit platters, homemade preserves, and eggs-to-order service in the courtyard are genuinely special.</p>

<h2>The Wild Card</h2>
<p><strong>10. Any Chai Tapri Near Hawa Mahal:</strong> Here's an unconventional recommendation. Grab a chai and a bun maska from any of the small stalls near Hawa Mahal early in the morning — around 7 AM, before the tourist crowds arrive. Sit on the steps, watch the Pink City wake up, and enjoy the simplest breakfast in the most beautiful setting. It costs Rs 30, and it might be the most memorable meal of your trip.</p>

<h2>Building Your Perfect Jaipur Breakfast Week</h2>
<p>If you're in Jaipur for a full week, here's how we'd plan it: traditional Rajasthani breakfasts on Monday, Wednesday, and Friday (rotate between Rawat, LMB, and Samrat). Modern cafe breakfasts on Tuesday, Thursday, and Saturday (Nuroh, Curious Life, and Tapri). Sunday splurge at a hotel breakfast. By the end of the week, you'll have tasted every dimension of Jaipur's breakfast culture.</p>

<p>Starting your food journey? Begin with breakfast at Nuroh Cafe, C Scheme, Jaipur. We'll set you up with great food, great coffee, and plenty of recommendations for what to eat next.</p>`,
    category: "Food & Brunch",
    tags: ["breakfast jaipur", "top breakfast spots", "jaipur food guide", "nuroh cafe", "where to eat jaipur"],
    date: "2026-03-01",
    author: "Nuroh Team",
    readingTime: "5 min read",
    image: "https://blog.nuroh.in/images/top-breakfast-spots-jaipur.jpg",
  },
  {
    title: "The Story Behind Nuroh's Signature Avocado Toast",
    slug: "nuroh-signature-avocado-toast",
    excerpt: "How Nuroh Cafe's avocado toast became Jaipur's most talked-about brunch dish — the ingredients, the process, and the story behind it.",
    content: `<p>Every cafe has that one dish — the one people photograph before they eat, the one that shows up in every Instagram story, the one that brings new customers through the door because a friend told them "you have to try it." At Nuroh Cafe in Jaipur, that dish is our avocado toast. It's been our top seller since week one, and the story behind how it came together is something we love sharing.</p>

<h2>How It Started: Not Another Avocado Toast</h2>
<p>When we were developing the Nuroh menu, avocado toast was an obvious candidate. It's a cafe staple worldwide. But that was exactly the problem — everyone serves avocado toast, and most of it is forgettable. Mashed avocado on whatever bread was available, a sprinkle of salt, maybe some pepper. Functional but uninspired.</p>
<p>We wanted ours to be different. Not gimmicky-different with unnecessary toppings or fusion experiments, but fundamentally better in the ingredients and technique. Our kitchen team spent weeks testing combinations — different bread types, avocado preparations, egg styles, and finishing elements — before arriving at what you see on the plate today.</p>
<p>The goal was simple: every single component had to earn its place. Nothing decorative, nothing there just for colour. If it's on the plate, it contributes to the flavour.</p>

<h2>Breaking Down the Dish</h2>
<p>Here's what goes into every Nuroh avocado toast, and why:</p>
<p><strong>The Bread — Sourdough from a Local Bakery:</strong> We use thick-cut sourdough that we source from a Jaipur-based artisan baker. It's naturally fermented, which gives it that characteristic tang and chew. We toast it on a flat grill — not in a toaster — so the outside gets properly crispy while the inside stays soft. The bread is the foundation, and cheap bread ruins the entire dish. We learned this early.</p>
<p><strong>The Avocado — Ripe, Seasoned, Textured:</strong> We don't mash our avocado into a smooth paste. Instead, we roughly smash it to keep some chunky texture, then season it with good sea salt, fresh cracked black pepper, and a squeeze of lime juice. The lime isn't just for flavour — it prevents browning and adds a brightness that balances the avocado's richness.</p>
<p><strong>The Eggs — Poached, Not Fried:</strong> Two poached eggs sit on top of the avocado, and getting them right is a non-negotiable. Our kitchen team poaches eggs to order — soft, runny yolks that break open when you cut into them and flow over the avocado and bread. This is the moment everyone photographs, and it's also the moment the dish transforms from good to incredible. That yolk acts as a sauce.</p>
<p><strong>The Finishing Touches:</strong> Cherry tomatoes halved and slightly roasted, red chilli flakes for gentle heat, microgreens for a peppery bite, and a generous drizzle of high-quality extra virgin olive oil that ties everything together. Each element is small but essential.</p>

<h2>Why It Works So Well</h2>
<p>The magic of this dish is balance. You've got the creamy richness of avocado, the fatty lusciousness of runny egg yolk, the tangy crunch of sourdough, the brightness of lime and tomato, and the subtle heat from chilli flakes. Every bite hits multiple flavour and texture notes simultaneously. It's satisfying without being heavy, photogenic without being pretentious, and comforting without being boring.</p>
<p>Pair it with a flat white or a cold brew, and you have a breakfast that's hard to beat anywhere in Jaipur.</p>

<h2>The Numbers Don't Lie</h2>
<p>Since opening, we've served thousands of avocado toasts. It consistently accounts for nearly a third of all breakfast orders. On weekends, we go through crates of avocados. We've had customers who've ordered it every single visit for months. And the most common thing we hear is: "I've had avocado toast at a lot of places, but yours is actually good."</p>
<p>That's the highest compliment we could ask for.</p>

<p>Haven't tried it yet? Come to Nuroh Cafe in C Scheme, Jaipur, and order the avocado toast. Pair it with whatever coffee your barista recommends. And yes — photograph it first. We won't judge.</p>`,
    category: "Food & Brunch",
    tags: ["avocado toast jaipur", "nuroh cafe signature dish", "brunch jaipur", "cafe food", "best avocado toast"],
    date: "2026-02-25",
    author: "Nuroh Team",
    readingTime: "5 min read",
    image: "https://blog.nuroh.in/images/nuroh-signature-avocado-toast.jpg",
  },
  {
    title: "Mediterranean Food in Jaipur: A Taste Journey at Nuroh Cafe",
    slug: "mediterranean-food-jaipur-nuroh",
    excerpt: "Craving Mediterranean food in Jaipur? Nuroh Cafe brings hummus, falafel, and fresh Mediterranean bowls to C Scheme with an Indian twist.",
    content: `<p>Mediterranean food has quietly become one of the most popular cuisines in India's urban cafes, and Jaipur is catching up fast. Hummus, falafel, tabbouleh, grain bowls — these dishes are showing up on menus across the city. At Nuroh Cafe in C Scheme, Mediterranean-inspired food isn't just a trend we're following — it's a core part of our identity. Here's why we love it, how we make it, and what you should order when you visit.</p>

<h2>Why Mediterranean Food Works So Well in India</h2>
<p>There's a reason Mediterranean food has resonated so deeply with Indian palates. The flavour profiles share surprising common ground:</p>
<ul>
<li><strong>Spice-forward cooking:</strong> Mediterranean cuisine uses cumin, coriander, paprika, sumac, and za'atar — spices that feel familiar to anyone who grew up on Indian food.</li>
<li><strong>Grain and legume based:</strong> Chickpeas, lentils, bulgur wheat, and couscous are Mediterranean staples that align perfectly with Indian vegetarian traditions.</li>
<li><strong>Fresh, vibrant flavours:</strong> Lemon, garlic, olive oil, fresh herbs — the Mediterranean emphasis on bright, clean flavours appeals to health-conscious diners who want food that's both nutritious and delicious.</li>
<li><strong>Sharing culture:</strong> Mezze-style eating, where multiple small dishes are shared around the table, mirrors the Indian thali concept. It's communal, generous, and fun.</li>
</ul>
<p>At Nuroh, we've leaned into these overlaps. Our Mediterranean dishes aren't trying to be authentically Lebanese or Greek — they're inspired by those traditions but made for Jaipur's palate.</p>

<h2>What's on Nuroh's Mediterranean Menu</h2>
<p>Here's a walkthrough of our Mediterranean-inspired offerings:</p>
<p><strong>The Mediterranean Bowl:</strong> This is our best-selling lunch item. A base of fluffy quinoa topped with house-made hummus, roasted seasonal vegetables (usually bell peppers, zucchini, and sweet potato), crumbled feta cheese, kalamata olives, and a lemon-herb vinaigrette. It's colourful, filling, and nutritionally complete — protein from the quinoa and chickpeas, healthy fats from the olive oil and feta, and a full serving of vegetables. Regulars who are watching their diet without wanting to eat boring food swear by this bowl.</p>
<p><strong>House-Made Hummus with Flatbread:</strong> We make our hummus fresh daily — soaked chickpeas blended with tahini, lemon juice, garlic, and good olive oil. It's smoother and more flavourful than anything you'll get from a store-bought tub. Served with warm, freshly baked flatbread and a drizzle of paprika-infused olive oil on top. Perfect as a starter or a light snack.</p>
<p><strong>Falafel Wrap:</strong> Crispy-on-the-outside, soft-on-the-inside falafel patties wrapped in a warm tortilla with shredded lettuce, pickled onions, tomatoes, tahini sauce, and a hint of harissa for heat. It's one of the most popular takeaway orders — filling enough for lunch, compact enough to eat on the go.</p>
<p><strong>Greek Salad:</strong> Chunky tomatoes, cucumbers, red onions, bell peppers, olives, and a generous block of feta dressed with olive oil, oregano, and red wine vinegar. Simple, refreshing, and exactly what you want on a hot Jaipur afternoon.</p>

<h2>The Indian Twist</h2>
<p>While we respect Mediterranean traditions, we're not afraid to add our own spin. Our hummus has a touch more garlic than a traditional recipe because that's what our customers love. Our falafel has a pinch of Indian green chilli blended in for extra kick. The Mediterranean bowl's roasted vegetables get a light dusting of chaat masala before roasting — subtle enough that you can't quite place it, but it adds a familiar warmth that makes the dish feel like home.</p>
<p>This isn't fusion for the sake of being different. It's thoughtful cooking that bridges two great food cultures.</p>

<h2>Pairing Mediterranean Food with Coffee</h2>
<p>One thing we've discovered at Nuroh is that Mediterranean food and specialty coffee are natural partners. The clean, bright flavours of a Mediterranean bowl don't compete with a well-made pour over the way heavy, greasy food might. A falafel wrap with a cold brew on the side is one of the most popular lunch combos at our cafe. The earthy chickpeas and the smooth, chocolatey cold brew complement each other beautifully.</p>

<p>Curious about Mediterranean food in Jaipur? Come to Nuroh Cafe in C Scheme and start with the Mediterranean bowl. It's the dish that converts sceptics into regulars. We're open for lunch every day, and our kitchen team is always happy to customise your order.</p>`,
    category: "Food & Brunch",
    tags: ["mediterranean food jaipur", "healthy food jaipur", "nuroh cafe menu", "hummus falafel jaipur", "cafe lunch jaipur"],
    date: "2026-02-18",
    author: "Nuroh Team",
    readingTime: "5 min read",
    image: "https://blog.nuroh.in/images/mediterranean-food-jaipur-nuroh.jpg",
  },

  // ============================================================
  // CATEGORY: Jaipur Guide (Posts 11-15)
  // ============================================================
  {
    title: "15 Hidden Gems in Jaipur That Locals Don't Want You to Know",
    slug: "hidden-gems-jaipur-locals",
    excerpt: "Beyond Hawa Mahal and Amber Fort — discover 15 hidden gems in Jaipur that only locals know about, from secret cafes to quiet gardens.",
    content: `<p>Every tourist who visits Jaipur hits the same spots — Hawa Mahal, Amber Fort, City Palace, Nahargarh. And those places absolutely deserve the attention. But Jaipur is a city of layers, and some of its best experiences are tucked away in corners that most visitors never discover. As locals who spend every day in this city, the Nuroh Cafe team has compiled our favourite hidden gems — the places we actually go on our days off.</p>

<h2>Quiet Escapes & Green Spaces</h2>
<p><strong>1. Sisodia Rani Garden:</strong> Located on the Jaipur-Agra highway, about 10 km from the city centre, this terraced Mughal-style garden is almost always empty. The fountains, painted pavilions, and tiered flower beds make it one of the most romantic spots in Jaipur — without the crowds of Amber Fort.</p>
<p><strong>2. Vidyadhar Garden:</strong> Right next to Sisodia Rani, this garden is even less visited. Named after the architect of Jaipur, it has a charming layout with stone pathways and quiet benches. Perfect for reading or just sitting with your thoughts.</p>
<p><strong>3. Smriti Van, JLN Marg:</strong> A sprawling green park that most Jaipurites drive past without noticing. Early mornings here are peaceful — joggers, bird watchers, and elderly couples taking walks. Grab a takeaway coffee from Nuroh and come here for the most calming start to your day.</p>

<h2>Art, Culture & History Off the Beaten Path</h2>
<p><strong>4. Anokhi Museum of Hand Printing, Amber:</strong> Tucked inside a restored haveli near Amber Fort, this small museum showcases the art of hand-block printing — the craft Jaipur is famous for. The exhibits are beautifully curated, and the building itself is stunning. Most tourists at Amber Fort don't even know it exists.</p>
<p><strong>5. Panna Meena ka Kund:</strong> This stepwell near Amber Fort has gained some Instagram fame in recent years, but it's still far less crowded than Chand Baori. The geometric pattern of the steps is mesmerising, especially in the morning light.</p>
<p><strong>6. Jawahar Kala Kendra:</strong> Designed by architect Charles Correa, this cultural centre hosts art exhibitions, theatre performances, and workshops throughout the year. The building's architecture — based on the nine-square grid of Jaipur's city plan — is an attraction in itself.</p>
<p><strong>7. The Sculpture Park at Nahargarh:</strong> Most people go to Nahargarh for the sunset view. But the contemporary sculpture park inside the fort, with installations by Indian and international artists set against centuries-old stone walls, is a surreal experience that most visitors walk right past.</p>

<h2>Food & Drink Secrets</h2>
<p><strong>8. Nuroh Cafe, C Scheme:</strong> We had to include ourselves. While Nuroh isn't exactly hidden, many visitors to Jaipur stick to the Old City and touristy areas, missing the cafe culture in C Scheme entirely. If you want Jaipur's best specialty coffee and a world-class brunch, you need to cross into C Scheme.</p>
<p><strong>9. Lassiwala vs The Other Lassiwala, MI Road:</strong> Everyone knows about the famous Lassiwala on MI Road. But the real local secret? The shop right next to it — often debated as the "original" — serves a lassi that many locals actually prefer. Try both and decide for yourself.</p>
<p><strong>10. Masala Chowk, Ram Niwas Garden:</strong> An open-air food court inside the Ram Niwas garden complex that brings together Jaipur's best street food vendors in one clean, organised space. Dal baati churma, ghewar, kulfi, kachori — all in one spot, and without the hygiene concerns of roadside eating.</p>

<h2>Experiences You Won't Find in Guidebooks</h2>
<p><strong>11. Early morning walk through Johari Bazaar:</strong> Before 8 AM, when the shops are still shut and the jewellers haven't arrived, Johari Bazaar is hauntingly beautiful. The architecture reveals itself without the chaos of daytime crowds.</p>
<p><strong>12. The backstreets behind Hawa Mahal:</strong> Tourist groups gather at the front, but the lanes behind Hawa Mahal lead to old havelis, traditional printers, and tea stalls where you can sit and watch real Jaipur life unfold.</p>
<p><strong>13. Elefantastic, near Amber:</strong> An ethical elephant sanctuary where you can learn about and interact with rescued elephants. Unlike the controversial elephant rides at Amber Fort, this place prioritises animal welfare.</p>
<p><strong>14. Chokhi Dhani's quieter alternative — 1135 AD:</strong> Instead of the touristy Chokhi Dhani, try 1135 AD inside Amber Fort for Rajasthani cuisine in an actual heritage setting. The ambiance is unmatched, and the food is genuinely excellent.</p>
<p><strong>15. Sunrise at Jal Mahal:</strong> Everyone photographs Jal Mahal during the day. But arrive at sunrise — around 6 AM — and you'll see the palace floating in mist-covered water with the Aravalli hills behind it. No crowds, no honking, just stunning natural beauty.</p>

<p>Jaipur rewards those who look beyond the obvious. Start your exploration at Nuroh Cafe in C Scheme — fuel up with breakfast and coffee, and head out to discover the Pink City's best-kept secrets.</p>`,
    category: "Jaipur Guide",
    tags: ["hidden gems jaipur", "jaipur local guide", "things to see jaipur", "off beat jaipur", "jaipur travel tips"],
    date: "2026-03-14",
    author: "Nuroh Team",
    readingTime: "6 min read",
    image: "https://blog.nuroh.in/images/hidden-gems-jaipur-locals.jpg",
  },
  {
    title: "Best Work From Cafe Spots in Jaipur for Freelancers & Remote Workers",
    slug: "work-from-cafe-jaipur-freelancers",
    excerpt: "Find the best cafes in Jaipur for working remotely — reliable WiFi, good coffee, power outlets, and a vibe that helps you focus.",
    content: `<p>The work-from-cafe culture in Jaipur has exploded. Walk into any decent cafe on a weekday morning, and you'll see laptops open, headphones on, and a quiet focus that rivals any coworking space. For freelancers, remote workers, startup founders, and digital nomads, Jaipur's cafes have become de facto offices — and for good reason. The city offers great weather, affordable living, and an increasingly impressive selection of cafes that genuinely support the working crowd.</p>

<h2>What Makes a Cafe Good for Working?</h2>
<p>Not every cafe is built for a four-hour work session. Before our recommendations, here's what actually matters when you're choosing a work cafe:</p>
<ul>
<li><strong>Reliable WiFi:</strong> This is the absolute baseline. If the WiFi drops every 20 minutes, the best coffee in the world won't save the experience.</li>
<li><strong>Power outlets:</strong> Running out of battery during a client call is a nightmare. Good work cafes have outlets at most tables, not hidden behind furniture.</li>
<li><strong>Comfortable seating:</strong> You're going to be there for hours. Wooden stools and Instagram-worthy but spine-destroying chairs don't cut it.</li>
<li><strong>Noise level:</strong> A gentle ambient buzz is fine — even helpful for concentration. Loud music, shrieking blenders, and large groups make deep work impossible.</li>
<li><strong>Food and coffee quality:</strong> You'll need fuel. A good menu that goes beyond just coffee means you don't have to leave for lunch.</li>
<li><strong>Staff attitude:</strong> Some cafes get visibly annoyed when you sit for more than an hour. The best work cafes welcome it — as long as you're ordering.</li>
</ul>

<h2>The Best Work-Friendly Cafes in Jaipur</h2>
<p><strong>Nuroh Cafe, C Scheme:</strong> We designed Nuroh with remote workers in mind. Our WiFi is high-speed and stable — we invested in enterprise-grade connectivity because we know how critical it is. Every table section has accessible power outlets. The seating includes comfortable chairs and cushioned benches that you can sit in for hours without discomfort. The ambient music is kept at a conversation-friendly volume, and our team is trained to welcome working guests. Plus, with specialty coffee and a full food menu, you don't need to leave until you're done. Many of our regulars work from Nuroh three to five days a week.</p>
<p><strong>Curious Life, Vaishali Nagar:</strong> A solid option in west Jaipur. Clean, well-lit space with decent WiFi and good coffee. The crowd tends to be younger — college students and early-career freelancers. Can get noisy during lunch rush.</p>
<p><strong>The Lazy Mango, C Scheme:</strong> A cosy space with a quieter vibe. The WiFi is reliable, and the staff is welcoming. Their food menu is more limited than some options, but the coffee is good and the atmosphere is calm.</p>
<p><strong>Taruveda Bistro, Ramnagar:</strong> A newer addition to Jaipur's cafe scene with a dedicated workspace vibe. They have longer tables suited for laptop work and keep the music low during weekdays.</p>
<p><strong>Cafe White Sage, Tonk Road:</strong> Further south, White Sage has become popular with the freelancer crowd in Malviya Nagar. Spacious seating, outdoor section, and a relaxed policy on working hours.</p>

<h2>Work-From-Cafe Etiquette</h2>
<p>If you're going to use a cafe as your office, there's an unwritten code of conduct that keeps the system working for everyone:</p>
<ul>
<li><strong>Order regularly:</strong> At minimum, one order every 90 minutes to two hours. The cafe isn't a library — they need to make money. A coffee and a snack go a long way in showing respect.</li>
<li><strong>Don't take calls on speaker:</strong> Use headphones. Always. No exceptions.</li>
<li><strong>Don't hog large tables:</strong> If you're working solo, take a two-seater. Leave the big tables for groups.</li>
<li><strong>Be mindful during peak hours:</strong> If the cafe fills up during lunch rush, consider wrapping up or moving to a smaller spot. Cafes appreciate working guests, but only if you're aware of the dynamics.</li>
<li><strong>Tip well:</strong> If you've been there for three hours and the staff has been friendly, leave a good tip. It's the cost of renting the space.</li>
</ul>

<h2>Why Jaipur is Perfect for Remote Work</h2>
<p>Beyond the cafes, Jaipur's appeal for remote workers comes from the cost of living, the weather (eight months of sunshine), the food scene, the cultural richness, and the growing community of creative professionals. It's not trying to be Goa or Bangalore — it's becoming its own kind of remote work hub.</p>

<p>Need a reliable workspace with great coffee? Nuroh Cafe in C Scheme, Jaipur, is open every day. Bring your laptop, plug in, and get to work. We'll keep the coffee flowing.</p>`,
    category: "Jaipur Guide",
    tags: ["work from cafe jaipur", "remote work jaipur", "freelancer cafe", "wifi cafe jaipur", "coworking cafe"],
    date: "2026-03-06",
    author: "Nuroh Team",
    readingTime: "5 min read",
    image: "https://blog.nuroh.in/images/work-from-cafe-jaipur-freelancers.jpg",
  },
  {
    title: "Ultimate Things to Do in Jaipur: A Local's Weekend Guide",
    slug: "things-to-do-jaipur-weekend",
    excerpt: "Plan the perfect weekend in Jaipur with this local's guide — from morning coffee to sunset views, here's everything worth doing.",
    content: `<p>Jaipur on a weekend is a different city from Jaipur on a weekday. The pace slows down, the cafes fill up, the markets come alive, and there's an energy that invites you to explore. Whether you're a Jaipur local looking for something new or a visitor planning a weekend trip, this guide covers everything worth doing — morning to night, curated by people who actually live here.</p>

<h2>Saturday Morning: Coffee and Culture</h2>
<p>Start your weekend right with a proper breakfast. Head to Nuroh Cafe in C Scheme around 9 AM — early enough to avoid the brunch rush, late enough to have slept in. Order the avocado toast and a flat white, take your time, and plan your day over a second cup.</p>
<p>After breakfast, drive to the Old City. Start at <strong>Hawa Mahal</strong> — yes, it's touristy, but from the inside looking out, it's still magnificent. The latticed windows on the upper floors frame the city beautifully. Get tickets for the full building access, not just the ground floor.</p>
<p>From Hawa Mahal, walk to <strong>Jantar Mantar</strong>. It's a five-minute stroll, and the astronomical instruments are genuinely fascinating once you understand what they do. Hire one of the guides at the entrance — they explain the science in a way that makes the Rs 200 fee completely worth it.</p>
<p>Cross the road to <strong>City Palace</strong>. Spend an hour in the museum section, then wander through the courtyards. The Diwan-i-Khas with its massive silver urns is a highlight most people rush past.</p>

<h2>Saturday Afternoon: Food and Shopping</h2>
<p>By now you'll be hungry. Head to <strong>Masala Chowk</strong> inside Ram Niwas Garden for a street food lunch — dal baati churma, mirchi vada, or a plate of keema bati. It's clean, affordable, and genuinely delicious.</p>
<p>Post-lunch, explore the shopping in Old City:</p>
<ul>
<li><strong>Johari Bazaar</strong> for jewellery and traditional Rajasthani ornaments.</li>
<li><strong>Bapu Bazaar</strong> for textiles, juttis (leather shoes), and block-printed fabrics.</li>
<li><strong>Tripolia Bazaar</strong> for lac bangles and traditional Rajasthani items.</li>
</ul>
<p>Bargain confidently — starting at half the quoted price is standard practice in these markets. If a shopkeeper looks offended, they're performing. Keep smiling and negotiating.</p>

<h2>Saturday Evening: Sunset and Dinner</h2>
<p>For sunset, you have two iconic options:</p>
<p><strong>Nahargarh Fort:</strong> Drive up the winding road to the fort and find a spot on the ramparts. The view of Jaipur's skyline as the sun sets behind the Aravalli hills is unforgettable. Arrive by 5 PM in winter or 6 PM in summer to get a good spot. The Padao restaurant at the fort serves decent snacks and drinks if you want to extend the evening.</p>
<p><strong>Jal Mahal viewpoint:</strong> If you don't want to drive up the hill, the Jal Mahal viewpoint on the road to Amber offers a stunning view of the lake palace during golden hour. It's a popular evening hangout for locals.</p>
<p>For dinner, keep it Rajasthani. <strong>1135 AD</strong> in Amber Fort serves upscale Rajasthani cuisine in a heritage setting. If you want something more casual and affordable, <strong>Handi Restaurant</strong> on MI Road has been serving reliable Rajasthani non-veg food for decades — their laal maas is legendary.</p>

<h2>Sunday: Slower Pace, Deeper Exploration</h2>
<p>Sunday should feel different from Saturday — more relaxed, more personal.</p>
<p>Start with a <strong>morning drive to Amber Fort</strong> (get there by 9 AM before the crowd). Walk up rather than taking a jeep — the approach path has beautiful views and the exercise feels good. Spend a couple of hours exploring the palace rooms, mirror work, and lake views.</p>
<p>On the way back, stop at <strong>Panna Meena ka Kund</strong> — the historic stepwell with stunning geometric architecture. Then visit the <strong>Anokhi Museum of Hand Printing</strong> nearby for a peaceful half-hour among beautiful textile exhibits.</p>
<p>Afternoon: return to C Scheme and spend the rest of the day at <strong>Nuroh Cafe</strong>. Read a book, catch up with a friend, try the Mediterranean bowl for lunch, and have one last cold brew before the week starts. This is how most Jaipur locals actually spend their Sundays — not sightseeing, but sitting in their favourite cafe, watching the world slow down.</p>

<p>Jaipur rewards both the adventurous and the unhurried. Come plan your weekend at Nuroh Cafe, C Scheme — we'll fuel your mornings and give you a soft place to land when the exploring is done.</p>`,
    category: "Jaipur Guide",
    tags: ["things to do jaipur", "jaipur weekend guide", "jaipur travel", "local jaipur tips", "jaipur itinerary"],
    date: "2026-02-27",
    author: "Nuroh Team",
    readingTime: "6 min read",
    image: "https://blog.nuroh.in/images/things-to-do-jaipur-weekend.jpg",
  },
  {
    title: "Best Study Cafes in Jaipur: Where Students Actually Get Work Done",
    slug: "best-study-cafes-jaipur",
    excerpt: "Looking for the best study cafes in Jaipur? Here are the top spots with WiFi, quiet ambiance, and good coffee for serious study sessions.",
    content: `<p>Jaipur is a student city. With dozens of universities, coaching institutes, and competitive exam preparation centres, hundreds of thousands of students call this city home. And while libraries and study rooms have their place, there's a growing tribe of students who study better in cafes — the ambient noise, the coffee refills, the change of scenery. If you're one of them, this guide is for you.</p>

<h2>Why Study in a Cafe?</h2>
<p>It might seem counterintuitive to study in a public place with distractions, but research actually supports it. A moderate level of ambient noise — the kind you get in a well-designed cafe — can boost creative thinking and focus. It's called the "coffee shop effect," and it works because the background hum prevents your brain from drifting into silence-induced distraction while not being loud enough to interrupt your train of thought.</p>
<p>Beyond the science, cafes offer practical benefits for students:</p>
<ul>
<li><strong>Structured time:</strong> When you go to a cafe to study, you're making a commitment. You've left your house, spent money on coffee, and set up your workspace. That act of investment makes it harder to procrastinate.</li>
<li><strong>No bed temptation:</strong> At home, your bed is always calling. In a cafe, sitting up in a chair, you're physically positioned for focus.</li>
<li><strong>Social accountability:</strong> Being around other people working creates subtle peer pressure to stay on task.</li>
<li><strong>Better coffee than instant packets:</strong> Let's be honest — this matters.</li>
</ul>

<h2>Best Study-Friendly Cafes in Jaipur</h2>
<p><strong>Nuroh Cafe, C Scheme:</strong> We built Nuroh knowing that a significant portion of our weekday guests would be students and young professionals. Here's what makes it work for studying:</p>
<ul>
<li>Enterprise-grade WiFi that doesn't drop during peak hours.</li>
<li>Power outlets accessible from every seating section.</li>
<li>Comfortable seating — padded chairs and cushioned benches, not trendy stools that destroy your back after an hour.</li>
<li>Music kept at a low, consistent volume. No sudden loud tracks that break concentration.</li>
<li>A menu that supports long sessions — coffee, fresh juices, light meals, and snacks so you can refuel without leaving.</li>
<li>Our team understands the student crowd. We never hover or pressure you to order more. Study in peace.</li>
</ul>

<p><strong>Curious Life, Vaishali Nagar:</strong> Popular with students from nearby colleges. The space is clean and modern, WiFi is reliable, and the coffee is above average. It gets crowded in the afternoon, so morning sessions are your best bet.</p>
<p><strong>The Lazy Mango, C Scheme:</strong> A quieter option that works well for deep-focus study sessions. The space is smaller, which means fewer people and less noise. Their hot chocolate is a nice break from coffee when you've had too many cups.</p>
<p><strong>Cafe Bae, Raja Park:</strong> Affordable and student-friendly. The food and drinks are budget-conscious, and the staff is relaxed about long stays. WiFi is decent but can get slow during evening hours.</p>
<p><strong>Cafe White Sage, Tonk Road:</strong> If you're in south Jaipur, White Sage is a reliable study spot. Spacious layout, outdoor seating when the weather is nice, and a calm weekday atmosphere.</p>

<h2>Study Cafe Tips from Students Who've Been There</h2>
<p>We talked to some of our regular student customers and compiled their best advice:</p>
<ul>
<li><strong>Go during off-peak hours:</strong> Weekday mornings (9 AM to 12 PM) and late afternoons (3 PM to 5 PM) are the quietest times at most cafes. Avoid weekends if you need real focus.</li>
<li><strong>Bring noise-cancelling headphones:</strong> Even in the quietest cafe, you'll want them. They're the single best investment for a cafe studier.</li>
<li><strong>Set a time goal, not a page goal:</strong> Instead of "I'll finish Chapter 5," try "I'll study focused for 2 hours." Time-based goals reduce anxiety and increase consistency.</li>
<li><strong>Order strategically:</strong> Start with a coffee, switch to water or juice after two hours, and have a light snack to keep energy up. Avoid heavy meals — they trigger the post-lunch slump.</li>
<li><strong>Use the Pomodoro technique:</strong> 25 minutes of focus, 5 minutes of break. During the break, look away from the screen, stretch, sip your coffee. After four rounds, take a longer 15-minute break.</li>
<li><strong>Respect the space:</strong> Don't take phone calls on speaker. Don't spread across multiple tables. Order every 90 minutes to two hours. Be the kind of customer that cafes love having.</li>
</ul>

<p>If you're a student in Jaipur looking for a reliable study spot with fast WiFi, great coffee, and a vibe that helps you focus, come to Nuroh Cafe in C Scheme. Bring your books, plug in your laptop, and settle in. We've got you covered.</p>`,
    category: "Jaipur Guide",
    tags: ["study cafe jaipur", "best cafes for students", "wifi cafe jaipur", "jaipur student spots", "study spots jaipur"],
    date: "2026-02-22",
    author: "Nuroh Team",
    readingTime: "5 min read",
    image: "https://blog.nuroh.in/images/best-study-cafes-jaipur.jpg",
  },
  {
    title: "C Scheme Jaipur: The Complete Neighbourhood Food & Cafe Guide",
    slug: "c-scheme-jaipur-food-cafe-guide",
    excerpt: "C Scheme is Jaipur's food and cafe capital. Here's the complete guide to the best restaurants, cafes, and street food in the neighbourhood.",
    content: `<p>If Jaipur has a food and lifestyle capital, it's C Scheme. This centrally located neighbourhood has evolved from a quiet residential area into the city's most vibrant dining and cafe district. From high-end restaurants to street food corners, specialty coffee shops to late-night eateries, C Scheme has it all. Whether you live here or you're visiting Jaipur, this is the definitive guide to eating and drinking in C Scheme.</p>

<h2>The Cafe Scene: Where C Scheme Truly Shines</h2>
<p>C Scheme has the highest concentration of quality cafes in Jaipur, and the standard keeps rising. Here's where to go depending on what you're after:</p>
<p><strong>Nuroh Cafe:</strong> Our home, and the cafe we believe sets the standard in C Scheme. Specialty coffee, a menu that covers everything from avocado toast to Mediterranean bowls, and a space designed for both socialising and working. Whether you need a quick coffee or a three-hour brunch, Nuroh is the versatile choice. We're particularly proud of our single-origin pour overs and our house-made cold brew — if you're serious about coffee, this is where you start.</p>
<p><strong>Tapri Central:</strong> A C Scheme landmark. Known for their chai and Indian comfort food, Tapri is the go-to for a desi breakfast or an evening snack with friends. Their rooftop seating is iconic, and the bun maska-chai combo is practically a city tradition.</p>
<p><strong>The Lazy Mango:</strong> A cosy, intimate cafe that's perfect for a quiet afternoon. Their salads and sandwiches are fresh, and the ambiance is calming. A good option when you want to escape the energy of busier cafes.</p>
<p><strong>Nibs Cafe:</strong> A popular spot for desserts and pastries. Their red velvet cake and cheesecake are talked about across the city. Good for a post-dinner sweet fix.</p>

<h2>Restaurants: From Casual to Fine Dining</h2>
<p>C Scheme's restaurant scene covers every cuisine and budget:</p>
<ul>
<li><strong>Handi Restaurant:</strong> A Jaipur institution for non-vegetarian food. Their laal maas, mutton handi, and butter chicken are consistently excellent. It's not fancy, but the food speaks for itself. Perfect for dinner.</li>
<li><strong>Suvarna Mahal (Rambagh Palace):</strong> Technically on the border of C Scheme, Suvarna Mahal is Jaipur's most opulent fine dining experience. Rajasthani and Mughlai cuisine served in a gold-and-mirror dining hall. It's expensive, but as a once-in-a-while experience, it's unparalleled.</li>
<li><strong>OCA, Ashok Marg:</strong> Modern Asian cuisine with a trendy vibe. Their Thai curries and dim sum are well-executed, and the cocktail menu is one of the best in Jaipur.</li>
<li><strong>Replay Diner:</strong> An American-style diner that does burgers, milkshakes, and comfort food. Popular with college students and families. The portions are large and the prices are reasonable.</li>
<li><strong>Zolocrust:</strong> Multi-cuisine with a focus on Italian and continental. Their wood-fired pizzas and pastas are reliable, and the outdoor seating is pleasant during Jaipur's cooler months.</li>
</ul>

<h2>Street Food and Quick Bites</h2>
<p>C Scheme's street food isn't as famous as the Old City's, but there are hidden gems:</p>
<ul>
<li><strong>The chaat vendor near Ganpati Plaza:</strong> Ask any C Scheme resident and they'll know this one. Pani puri, sev puri, and dahi bhalla that rivals any Old City vendor.</li>
<li><strong>Momos at the corner near Ashok Marg crossing:</strong> A small cart that shows up every evening. Steamed, fried, or tandoori momos with a fiery red chutney. Rs 60 for a plate of happiness.</li>
<li><strong>Kachori at the MI Road end:</strong> Where C Scheme meets MI Road, several kachori vendors set up shop in the morning. Pyaaz kachori with aloo sabzi for under Rs 50 — a breakfast that fuels half the neighbourhood.</li>
</ul>

<h2>The C Scheme Food Walk: Our Recommended Route</h2>
<p>If you want to experience the best of C Scheme's food scene in one day, here's our suggested route:</p>
<ul>
<li><strong>9:00 AM:</strong> Breakfast at Nuroh Cafe — avocado toast and flat white.</li>
<li><strong>11:30 AM:</strong> Chai and bun maska at Tapri Central.</li>
<li><strong>1:00 PM:</strong> Lunch at Handi Restaurant — order the mutton handi or butter chicken with naan.</li>
<li><strong>3:30 PM:</strong> Afternoon coffee back at Nuroh — try the cold brew or a pour over.</li>
<li><strong>5:30 PM:</strong> Evening chaat from the Ganpati Plaza vendor.</li>
<li><strong>7:30 PM:</strong> Dinner at OCA — Thai green curry and dim sum.</li>
<li><strong>9:30 PM:</strong> Dessert at Nibs Cafe — cheesecake to end the night.</li>
</ul>
<p>That's roughly six hours of eating, with comfortable breaks in between. You'll spend around Rs 3,000 to 4,000 for the full experience, and you'll have tasted a cross-section of everything C Scheme has to offer.</p>

<p>C Scheme is Jaipur's food heart, and it keeps getting better. Start your exploration at Nuroh Cafe — we'll fuel your morning and point you in the right direction for the rest of the day.</p>`,
    category: "Jaipur Guide",
    tags: ["C Scheme jaipur", "jaipur food guide", "restaurants C Scheme", "cafes jaipur", "jaipur neighbourhood guide"],
    date: "2026-02-15",
    author: "Nuroh Team",
    readingTime: "6 min read",
    image: "https://blog.nuroh.in/images/c-scheme-jaipur-food-cafe-guide.jpg",
  },

  // ============================================================
  // CATEGORY: Events & Lifestyle (Posts 16-20)
  // ============================================================
  {
    title: "Weekend Plans in Jaipur: Why Nuroh Cafe Should Be Your First Stop",
    slug: "weekend-plans-jaipur-nuroh",
    excerpt: "Planning your weekend in Jaipur? Start at Nuroh Cafe for breakfast, coffee, and the perfect launchpad for a great Saturday or Sunday.",
    content: `<p>There's a particular kind of weekend magic that starts with the right morning. Not waking up to an alarm, not scrolling through your phone in bed, but actually getting dressed, stepping out, and sitting down somewhere nice with a great cup of coffee and food that makes you glad you left the house. In Jaipur, that somewhere is Nuroh Cafe in C Scheme — and once you start your weekend here, the rest of the day just falls into place.</p>

<h2>The Perfect Weekend Morning at Nuroh</h2>
<p>Saturdays and Sundays at Nuroh have their own rhythm. The early birds arrive around 9 AM — usually regulars who've made weekend breakfast at Nuroh a ritual. By 10:30, the cafe is buzzing with friend groups, couples, and solo visitors settling into their corners.</p>
<p>Here's what a perfect Nuroh weekend morning looks like:</p>
<p><strong>9:00 AM — Arrive and Order Coffee First:</strong> Let the caffeine do its work before you decide on food. Our baristas recommend a flat white to start — it's rich, comforting, and wakes up your palate. If you're feeling adventurous, ask for the single-origin pour over of the day.</p>
<p><strong>9:30 AM — Food Arrives:</strong> The avocado toast is the obvious choice, but don't sleep on the eggs Benedict or the blueberry pancakes. If you're with a group, order a mix and share. Our portions are designed for sharing — generous but not excessive.</p>
<p><strong>10:00 AM — The Golden Hour:</strong> This is the time when the cafe is at its best. Natural light fills the space, the music is just right, and there's a contented energy that only exists in a cafe on a weekend morning. Read the paper, catch up with your friend, or just sit and people-watch. There's no rush.</p>
<p><strong>11:00 AM — Second Coffee:</strong> Switch to something cold if the day is warming up. Our cold brew is perfect here, or try an iced matcha if you want to balance your caffeine intake.</p>

<h2>After Nuroh: What to Do with the Rest of Your Weekend</h2>
<p>Once you've had your fill, the weekend opens up. Here are our favourite post-brunch activities in Jaipur, depending on your mood:</p>
<p><strong>If you want culture and history:</strong> Drive to Amber Fort. Arrive by noon when the morning tour bus crowd has thinned. Spend two hours exploring the palace, then stop at Panna Meena ka Kund on the way back. Cap the afternoon with chai at one of the small shops near Amber.</p>
<p><strong>If you want to shop:</strong> Head to Bapu Bazaar or Johari Bazaar in the Old City. Weekend shopping in the bazaars is an experience — colourful, chaotic, and full of treasures. Stock up on block-printed textiles, juttis, jewellery, and souvenirs.</p>
<p><strong>If you want nature:</strong> Drive to Nahargarh Biological Park or take the scenic route up to Nahargarh Fort. Pack a takeaway cold brew from Nuroh for the drive. The views from the fort are especially stunning in the late afternoon.</p>
<p><strong>If you want to be lazy:</strong> Stay at Nuroh. Seriously. Some of our best weekend days are spent right where we are — switching from breakfast to lunch, from coffee to juice, from reading a book to having a long conversation. There's zero judgment for spending three or four hours with us. That's what weekends are for.</p>

<h2>Weekend Specials at Nuroh</h2>
<p>We occasionally run weekend-only specials and events that make Saturday and Sunday visits even more rewarding:</p>
<ul>
<li><strong>Seasonal menu drops:</strong> New dishes and drinks that rotate monthly. Follow our Instagram to see what's coming up.</li>
<li><strong>Community events:</strong> Book clubs, coffee tastings, and creative workshops that happen on select weekends. These are free or low-cost and open to everyone.</li>
<li><strong>Live acoustic sets:</strong> On occasional Sunday afternoons, local musicians perform at the cafe. It adds a beautiful layer to the weekend vibe.</li>
</ul>

<h2>Why Starting Your Weekend Right Matters</h2>
<p>This might sound like we're overthinking breakfast, but we genuinely believe that how you start your weekend shapes the entire two days. A rushed, uninspired morning leads to an aimless afternoon. But a morning spent in a beautiful space with good food, good coffee, and the right energy sets a tone — of intention, of enjoyment, of actually making the most of your free time.</p>
<p>That's what Nuroh is designed to give you. Not just a meal and a drink, but a launching pad for the weekend you deserve.</p>

<p>This Saturday or Sunday, skip the delivery apps and the instant coffee. Come to Nuroh Cafe in C Scheme, Jaipur. Start your weekend the way it should be started — properly.</p>`,
    category: "Events & Lifestyle",
    tags: ["weekend jaipur", "nuroh cafe weekend", "things to do jaipur", "saturday brunch jaipur", "jaipur lifestyle"],
    date: "2026-03-13",
    author: "Nuroh Team",
    readingTime: "5 min read",
    image: "https://blog.nuroh.in/images/weekend-plans-jaipur-nuroh.jpg",
  },
  {
    title: "Most Instagrammable Cafes in Jaipur: Photo Guide 2026",
    slug: "instagrammable-cafes-jaipur-2026",
    excerpt: "Searching for the most Instagrammable cafes in Jaipur? Here's our 2026 photo guide to the prettiest spots that also serve great food.",
    content: `<p>Let's be real — in 2026, a cafe's aesthetic matters almost as much as its menu. Whether you're a content creator, a food blogger, or just someone who likes sharing beautiful moments on Instagram, Jaipur has an incredible selection of photogenic cafes. But here's the thing: pretty isn't enough. The best Instagrammable cafes combine gorgeous design with food and coffee that actually deserve to be photographed. Here's our curated list for 2026.</p>

<h2>What Makes a Cafe Truly Instagrammable?</h2>
<p>Before the list, let's define what we mean. An Instagrammable cafe needs:</p>
<ul>
<li><strong>Natural light:</strong> The single most important factor for great photos. A well-lit space means you don't need to fight with shadows or use flash.</li>
<li><strong>Design coherence:</strong> A consistent visual theme — whether minimal, rustic, colourful, or heritage — creates a stronger visual story than a random mix of furniture and decor.</li>
<li><strong>Photogenic food:</strong> The food should look as good as it tastes. Plating, colour contrast, and presentation all matter.</li>
<li><strong>Unique elements:</strong> A signature wall, an interesting architectural detail, a distinctive piece of furniture — something that makes your photos instantly identifiable.</li>
</ul>

<h2>The 2026 List: Jaipur's Most Photogenic Cafes</h2>
<p><strong>1. Nuroh Cafe, C Scheme:</strong> We designed Nuroh's interior with intention. Large windows flood the space with natural light throughout the day, making it a dream for food photography. The clean, modern aesthetic — warm wood tones, textured walls, green accents — creates a background that works with any outfit and any content style. Our food is plated for beauty: the avocado toast with its runny poached egg, the colourful Mediterranean bowl, the latte art that our baristas take seriously. The best photo spot? The window-side table during the morning golden hour. Pro tip: order the flat white specifically for the latte art shot — our baristas will pour you something beautiful.</p>

<p><strong>2. Palladio, Narain Niwas Palace:</strong> This Italian restaurant inside a heritage palace is probably the most photographed dining space in Jaipur. Blue and white tile work, Mughal-inspired arches, and manicured gardens create a visual that screams royal Rajasthan meets Mediterranean chic. The food is styled to match the setting — every plate is a composition. Best for: wide-angle interior shots and outfit-focused content.</p>

<p><strong>3. Tapri Central, C Scheme:</strong> The rooftop with its quirky Indian design elements — colourful cushions, vintage posters, fort views — has become one of Jaipur's most recognisable cafe settings on Instagram. It's especially photogenic during golden hour when the fort behind lights up. Best for: rooftop shots with a Jaipur backdrop.</p>

<p><strong>4. Bar Palladio:</strong> The bar counterpart to Palladio restaurant, with dramatic blue interiors, ornate mirrors, and mood lighting that creates a completely different aesthetic from its daytime sibling. Best for: evening and nightlife content. The cocktails photograph incredibly well against the deep blue walls.</p>

<p><strong>5. The Cafe at Baradari, City Palace:</strong> Dining inside the actual City Palace — surrounded by heritage architecture, water features, and centuries of history. The brunch here is good, and the setting is unmatched for creating content that captures Jaipur's royal heritage. Best for: heritage-themed content and food flat-lays with ornate backgrounds.</p>

<p><strong>6. Curious Life Coffee Roasters, Vaishali Nagar:</strong> A minimalist space with white walls, clean lines, and a focus on simplicity. Their latte art and pastries are photo-ready, and the clutter-free aesthetic makes for clean, modern Instagram grids. Best for: minimal, coffee-focused content.</p>

<p><strong>7. Anokhi Cafe, Prithviraj Road:</strong> Set inside the Anokhi store, this cafe has a charming courtyard vibe with hand-block printed textiles, traditional Rajasthani elements, and a leafy, organic feel. The food is wholesome and colourful. Best for: boho and artisanal content themes.</p>

<h2>Photography Tips for Cafe Shoots in Jaipur</h2>
<p>From our experience (and from watching hundreds of content creators shoot at Nuroh), here are practical tips:</p>
<ul>
<li><strong>Shoot between 9 AM and 11 AM:</strong> This is when natural light is softest and most flattering in most Jaipur cafes.</li>
<li><strong>Use portrait mode for food:</strong> The shallow depth of field makes food pop against a blurred cafe background.</li>
<li><strong>Include the environment:</strong> Don't just photograph the plate — include the table, the cup, the window light. Context makes the photo more compelling than a tight crop on food alone.</li>
<li><strong>Ask before using flash:</strong> Most cafes prefer that you don't. Natural light always looks better anyway.</li>
<li><strong>Be quick and considerate:</strong> Take your photos in the first two minutes while the food looks freshest, then eat. Don't spend 15 minutes shooting while other guests wait for their table.</li>
</ul>

<h2>The Bottom Line</h2>
<p>The best Instagrammable cafes are the ones where you'd want to be even without your phone. Great design, great food, great coffee — the photos are just a bonus.</p>

<p>Ready for your next content-worthy cafe visit? Nuroh Cafe in C Scheme, Jaipur, is designed for beautiful mornings — with the food, coffee, and light to prove it. Come for the photos, stay for the flat white.</p>`,
    category: "Events & Lifestyle",
    tags: ["instagrammable cafes jaipur", "photo cafes jaipur", "jaipur aesthetic cafes", "instagram spots jaipur", "nuroh cafe photos"],
    date: "2026-03-04",
    author: "Nuroh Team",
    readingTime: "5 min read",
    image: "https://blog.nuroh.in/images/instagrammable-cafes-jaipur-2026.jpg",
  },
  {
    title: "Book Reading Events at Nuroh Cafe: Jaipur's Literary Corner",
    slug: "book-reading-events-nuroh-jaipur",
    excerpt: "Nuroh Cafe hosts regular book reading events in Jaipur — discover our literary community, upcoming events, and why cafes make the best reading rooms.",
    content: `<p>Jaipur has always been a literary city. Home to the world-famous Jaipur Literature Festival, this city has a deep appreciation for the written word. But literature shouldn't be an annual event — it should be part of daily life. That's the idea behind Nuroh Cafe's book reading programme: regular, intimate literary gatherings that give Jaipur's readers a space to come together, share stories, and celebrate the simple act of reading.</p>

<h2>Why Cafes and Books Are Natural Partners</h2>
<p>There's a reason some of the world's greatest literary works were written in cafes. J.K. Rowling famously wrote chunks of Harry Potter in Edinburgh's coffee shops. Hemingway held court at Parisian cafes. The beat poets gathered at City Lights in San Francisco. Cafes offer something that homes and libraries don't — a warm, social environment that's still quiet enough for reflection.</p>
<p>At Nuroh, we see readers every single day. Solo visitors with paperbacks, students with textbooks, professionals with Kindles. They come for the coffee and stay for the atmosphere. Our book events simply formalise what was already happening naturally — they give those solo readers a chance to connect with each other.</p>

<h2>What Our Book Events Look Like</h2>
<p>Nuroh's literary events take several forms, each designed to appeal to different kinds of readers:</p>
<p><strong>Monthly Book Club:</strong> On the last Sunday of every month, we host a book club discussion. A book is announced at the beginning of the month — typically a mix of fiction and non-fiction, Indian and international authors. Participants read the book during the month and come together at Nuroh to discuss it over coffee. The discussions are moderated but informal — no academic pressure, just passionate readers sharing perspectives. Recent reads have included works by Arundhati Roy, Yuval Noah Harari, Chimamanda Ngozi Adichie, and emerging Indian writers.</p>
<p><strong>Author Readings:</strong> We occasionally host local and visiting authors for reading sessions. These are intimate events — usually 20 to 30 people — where the author reads from their work, talks about their creative process, and takes questions from the audience. The proximity and casual setting makes these far more personal than large auditorium events.</p>
<p><strong>Silent Reading Hours:</strong> This is one of our most popular events, and it's beautifully simple. On select Sunday mornings, we host a "silent reading hour" — everyone brings whatever they're reading, sits together, and reads in companionable silence for 90 minutes. No phones, no conversation — just reading. Afterwards, people share what they've been reading over coffee and pastries. It sounds quirky, but the feedback has been overwhelmingly positive. In a world of constant noise and notifications, an hour of shared silence is a gift.</p>
<p><strong>Poetry Evenings:</strong> Once a quarter, we host an evening dedicated to poetry. Participants read their favourite poems — published works or their own original pieces. These events attract a wonderfully diverse group: college students, working professionals, retired literature professors, and first-time poets gathering around coffee and verse.</p>

<h2>Building a Reading Community in Jaipur</h2>
<p>One of the most rewarding things about these events is watching a community form. Regular attendees have become friends. Our book club members exchange recommendations outside the formal meetings. People who met at a silent reading session now study together at Nuroh on weekdays. The cafe has become a node in Jaipur's literary network — a physical space where readers know they'll find their people.</p>
<p>This matters because reading can be isolating. You finish a book that changes the way you think, and often there's no one to talk to about it. Book clubs solve that problem. They give your reading life a social dimension that makes the whole experience richer.</p>

<h2>How to Join</h2>
<p>All of Nuroh's literary events are free to attend — we just ask that you order something from the menu. Here's how to stay in the loop:</p>
<ul>
<li>Follow <strong>Nuroh Cafe on Instagram</strong> where we announce all upcoming events.</li>
<li>Ask at the counter — our staff always knows what's coming up and can add you to the event notification list.</li>
<li>Show up — most events don't require registration. Just walk in at the announced time with your book and your curiosity.</li>
</ul>

<h2>Our Cafe Library</h2>
<p>We also maintain a small curated shelf at Nuroh with books you can read during your visit. It's not a lending library — the books stay in the cafe — but if you forgot to bring something to read, there's always an option waiting for you. The collection includes fiction, essays, poetry, and coffee table books, rotated regularly based on recommendations from our community.</p>

<p>Whether you're a voracious reader or someone who's been meaning to pick up a book for months, Nuroh Cafe in C Scheme, Jaipur, has a chair and a coffee waiting for you. Bring a book, join a discussion, or just sit and read — you're among friends here.</p>`,
    category: "Events & Lifestyle",
    tags: ["book events jaipur", "book club jaipur", "nuroh cafe events", "literary jaipur", "reading cafe jaipur"],
    date: "2026-02-26",
    author: "Nuroh Team",
    readingTime: "5 min read",
    image: "https://blog.nuroh.in/images/book-reading-events-nuroh-jaipur.jpg",
  },
  {
    title: "Open Mic Nights in Jaipur: Where to Perform & Watch Live Music",
    slug: "open-mic-nights-jaipur",
    excerpt: "From poetry to indie music — here's your complete guide to open mic nights in Jaipur, including Nuroh Cafe's popular acoustic evenings.",
    content: `<p>Jaipur's live performance scene has grown from a handful of bar gigs to a thriving network of open mic nights spread across cafes, pubs, and cultural spaces. Whether you're a musician looking for a stage, a poet wanting to share your work, or someone who just wants to spend an evening listening to talented locals, the city now offers more options than ever. Here's your complete guide to open mic culture in Jaipur.</p>

<h2>What Makes Jaipur's Open Mic Scene Special</h2>
<p>Unlike Mumbai or Delhi, where open mics often feel like showcase events for aspiring professionals, Jaipur's scene has a more grounded, community-driven feel. The audiences are supportive rather than critical. The performers range from nervous first-timers to seasoned musicians. And the venues — especially the cafes — create an intimate setting that makes the experience feel personal and real.</p>
<p>There's also a beautiful diversity in what you'll see at a Jaipur open mic. One performer might play a Prateek Kuhad cover on acoustic guitar, followed by someone reciting an original poem in Hindi, followed by a comedian testing new material. That unpredictability is part of the charm — you never quite know what you're going to get, and that's what makes every night different.</p>

<h2>Where to Find Open Mic Nights in Jaipur</h2>
<p><strong>Nuroh Cafe, C Scheme:</strong> Our acoustic evenings have become one of the most talked-about open mic events in Jaipur. Here's what makes them work:</p>
<ul>
<li><strong>Intimate setting:</strong> We cap attendance to keep the event comfortable. This isn't a concert — it's a gathering. Performers play to an audience that's close enough to make eye contact, which creates a connection you don't get in larger venues.</li>
<li><strong>Quality sound:</strong> We invest in proper audio equipment — a good microphone, a small PA system, and sound checks before the event starts. Nothing ruins an open mic faster than feedback and bad acoustics.</li>
<li><strong>Mixed format:</strong> Our open mics welcome musicians, poets, spoken word artists, and storytellers. The variety keeps the energy dynamic throughout the evening.</li>
<li><strong>Coffee, not alcohol:</strong> Because we're a cafe rather than a bar, our open mics have a different energy. People actually listen. There's a warmth and attentiveness that alcohol-heavy venues sometimes lack.</li>
</ul>
<p>Our events usually happen on the second and fourth Friday of each month, starting around 7 PM. Follow our Instagram for confirmed dates.</p>

<p><strong>100 Percent Rock, MI Road:</strong> One of Jaipur's longest-running live music venues. Their open mics lean heavily toward rock and blues. If you're a band or a guitarist looking for a high-energy crowd, this is your spot. The vibe is loud, enthusiastic, and unapologetically rock and roll.</p>

<p><strong>The Stag, Tonk Road:</strong> A gastropub that hosts regular open mics with a mix of music and comedy. The crowd trends younger — college students and early twenties. The atmosphere is casual and the performances are hit-or-miss, which is part of the open mic charm.</p>

<p><strong>Jawahar Kala Kendra, JLN Marg:</strong> Not a cafe or bar, but this cultural centre hosts periodic spoken word and poetry events that are worth seeking out. The setting — an architecturally stunning space designed by Charles Correa — elevates the entire experience. These events tend to attract a more literary crowd.</p>

<p><strong>Take 5 Cafe:</strong> A smaller venue that hosts occasional open mics with a jazz and acoustic focus. The intimate space works well for solo performers and duos. Good coffee and a knowledgeable audience.</p>

<h2>Tips for Performing at Your First Open Mic</h2>
<p>If you've been thinking about performing but haven't worked up the nerve, here's practical advice from performers who started at Nuroh's open mics:</p>
<ul>
<li><strong>Start with one song or one poem:</strong> Don't try to do a 20-minute set on your first night. One well-prepared piece is enough to get the experience and build confidence.</li>
<li><strong>Practice your piece exactly as you'll perform it:</strong> Standing up, with the instrument if applicable, at the volume you'll use on stage. Practising while sitting on your bed doesn't prepare you for the real thing.</li>
<li><strong>Arrive early:</strong> Sign up for an early slot. The longer you wait, the more your nerves build. Getting it done in the first half lets you enjoy the rest of the evening relaxed.</li>
<li><strong>Make eye contact:</strong> It's scary, but connecting with even one friendly face in the audience transforms the experience. At Nuroh, we promise the audience is always friendly.</li>
<li><strong>Don't apologise before you start:</strong> "Sorry, I'm nervous" or "This probably isn't very good" undercuts your performance before it begins. Walk up, smile, and begin.</li>
</ul>

<h2>Tips for Being a Great Open Mic Audience Member</h2>
<p>The audience makes or breaks an open mic. Here's how to be the kind of listener every performer hopes for:</p>
<ul>
<li>Put your phone away during performances.</li>
<li>Applaud generously — especially for first-timers.</li>
<li>Keep conversations quiet or take them outside.</li>
<li>Stay for the whole event, not just the performer you know.</li>
</ul>

<p>Whether you want to watch, listen, or step up to the microphone yourself, Jaipur's open mic scene welcomes everyone. Check out Nuroh Cafe's acoustic evenings in C Scheme, Jaipur — it might just be the start of something you didn't know you needed.</p>`,
    category: "Events & Lifestyle",
    tags: ["open mic jaipur", "live music jaipur", "nuroh cafe events", "acoustic night jaipur", "jaipur nightlife"],
    date: "2026-02-19",
    author: "Nuroh Team",
    readingTime: "6 min read",
    image: "https://blog.nuroh.in/images/open-mic-nights-jaipur.jpg",
  },
  {
    title: "How Nuroh Cafe is Building a Community in Jaipur",
    slug: "nuroh-cafe-community-jaipur",
    excerpt: "More than coffee and food — discover how Nuroh Cafe in Jaipur is building a real community through events, education, and genuine connection.",
    content: `<p>When we first imagined Nuroh Cafe, we had a clear picture of what it shouldn't be — another cafe that opens, rides a wave of Instagram hype, and fades into irrelevance within a year. Jaipur has seen dozens of those. What we wanted instead was something that lasts. Something that becomes a part of people's lives. Not just a place to eat and drink, but a space where people meet, create, learn, and belong. A year in, we can honestly say that the community around Nuroh has exceeded every expectation we had.</p>

<h2>The Third Place: Why Community Cafes Matter</h2>
<p>Sociologist Ray Oldenburg coined the term "third place" — a social space separate from home (first place) and work (second place) where people gather, connect, and build relationships. Historically, these were barbershops, parks, pubs, and yes — cafes. In modern Jaipur, where people increasingly live in apartments and work from home, the need for third places has never been greater.</p>
<p>Nuroh Cafe was designed to be a third place. Not a coworking space with coffee attached, not a restaurant that happens to have good Wi-Fi, but a genuine community hub where different groups of people cross paths. The freelancer working on a deadline sits next to the group of friends celebrating a birthday. The college student studying for exams shares the space with the retired couple enjoying their Saturday morning. These small intersections of lives create something that feels real and human.</p>

<h2>How We Build Community — The Practical Stuff</h2>
<p>Community doesn't build itself. It takes intentional effort and consistent programming. Here's what we do:</p>
<p><strong>Regular Events:</strong> Our event calendar includes book clubs, coffee tasting workshops, latte art sessions, open mic nights, silent reading hours, and poetry evenings. These aren't occasional — they happen on a predictable schedule so people can plan around them. Consistency is what turns an event into a tradition and attendees into a community.</p>
<p><strong>Barista Education:</strong> We host monthly "behind the bar" sessions where customers can learn about coffee — from bean to cup. These workshops cover tasting, brewing, and the basics of espresso. They're deliberately casual and beginner-friendly. The goal isn't to create coffee snobs; it's to share knowledge that makes people appreciate what they're drinking. People who attend these workshops become more connected to the cafe because they understand what goes into their cup.</p>
<p><strong>Supporting Local Creators:</strong> We regularly feature work by Jaipur-based artists, photographers, and designers on our walls. Local musicians perform at our acoustic evenings. We use products from local bakers, farmers, and artisans wherever possible. This isn't charity — it's alignment. Nuroh exists within an ecosystem of Jaipur creators, and supporting them strengthens the community we're all part of.</p>
<p><strong>The Regulars Culture:</strong> Every great cafe has regulars, and we go out of our way to make ours feel valued. Our baristas know names, usual orders, and life updates. We remember birthdays. We hold favourite tables when we can. These small gestures sound trivial, but they're the foundation of the belonging that keeps people coming back. When someone says "Nuroh is my cafe," that sense of ownership is the ultimate compliment.</p>

<h2>Stories from the Nuroh Community</h2>
<p>The best proof that community building works is in the stories that come out of it:</p>
<ul>
<li>Two freelancers who met at adjacent tables during a workday have become business partners. They still work from Nuroh every Tuesday and Thursday.</li>
<li>A book club member who was new to Jaipur and didn't know anyone in the city now has a close friend group — all formed through our monthly reading sessions.</li>
<li>A college student who performed at our open mic for the first time, shaking with nerves, is now a confident performer who plays at venues across the city. She credits that first Nuroh open mic as the push she needed.</li>
<li>A retired professor who comes every morning at 9 AM has become an informal mentor to several young professionals who sit near him. The conversations happen naturally — no one arranged them.</li>
</ul>
<p>These stories aren't marketing material. They're the reason we open our doors every day.</p>

<h2>What's Next: Growing Without Losing Soul</h2>
<p>The challenge for any community-driven business is scaling without diluting what makes it special. As Nuroh grows — whether through expanded hours, new programming, or eventually new locations — our commitment is to keep community at the centre. Every decision we make gets filtered through one question: "Does this strengthen the relationship between Nuroh and the people who call it their space?"</p>
<p>We're exploring new initiatives: collaborative events with other Jaipur businesses, mentorship programmes connecting experienced professionals with students, and seasonal pop-ups that bring new faces into the Nuroh orbit. But the core will always be the same — great coffee, genuine warmth, and a space where people feel they belong.</p>

<p>Nuroh Cafe in C Scheme, Jaipur, is more than a cafe. It's a living room for the city's creative, curious, and connected. Whether you've been coming since day one or you haven't visited yet, there's a chair here with your name on it. Come be part of what we're building.</p>`,
    category: "Events & Lifestyle",
    tags: ["nuroh cafe community", "jaipur cafe culture", "community cafe jaipur", "nuroh cafe events", "third place jaipur"],
    date: "2026-02-12",
    author: "Nuroh Team",
    readingTime: "6 min read",
    image: "https://blog.nuroh.in/images/nuroh-cafe-community-jaipur.jpg",
  },
];
