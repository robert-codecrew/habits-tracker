'use strict'
// this will seed my database with data from quotes api 

const data = [
    {
    "q": "Growing up is losing some illusions, in order to acquire others.",
    "a": "Virginia Woolf",
    "c": "64",
    "h": "<blockquote>&ldquo;Growing up is losing some illusions, in order to acquire others.&rdquo; &mdash; <footer>Virginia Woolf</footer></blockquote>"
    },
    {
    "q": "Some of us learn from other people's mistakes and the rest of us have to be other people.  ",
    "a": "Zig Ziglar",
    "c": "91",
    "h": "<blockquote>&ldquo;Some of us learn from other people's mistakes and the rest of us have to be other people.  &rdquo; &mdash; <footer>Zig Ziglar</footer></blockquote>"
    },
    {
    "q": "Action may not always bring happiness, but there is no happiness without action.",
    "a": "William James",
    "c": "80",
    "h": "<blockquote>&ldquo;Action may not always bring happiness, but there is no happiness without action.&rdquo; &mdash; <footer>William James</footer></blockquote>"
    },
    {
    "q": "The pursuit of mastery bears gifts. ",
    "a": "Gary Keller",
    "c": "36",
    "h": "<blockquote>&ldquo;The pursuit of mastery bears gifts. &rdquo; &mdash; <footer>Gary Keller</footer></blockquote>"
    },
    {
    "q": "Sometimes things become possible if we want them bad enough.",
    "a": "T.S. Eliot",
    "c": "60",
    "h": "<blockquote>&ldquo;Sometimes things become possible if we want them bad enough.&rdquo; &mdash; <footer>T.S. Eliot</footer></blockquote>"
    },
    {
    "q": "In the midst of chaos, there is also opportunity.",
    "a": "Sun Tzu",
    "c": "49",
    "h": "<blockquote>&ldquo;In the midst of chaos, there is also opportunity.&rdquo; &mdash; <footer>Sun Tzu</footer></blockquote>"
    },
    {
    "q": "Your chances of success in any undertaking can always be measured by your belief in yourself.",
    "a": "Robert Collier",
    "c": "93",
    "h": "<blockquote>&ldquo;Your chances of success in any undertaking can always be measured by your belief in yourself.&rdquo; &mdash; <footer>Robert Collier</footer></blockquote>"
    },
    {
    "q": "There is little success where there is little laughter.",
    "a": "Andrew Carnegie",
    "c": "55",
    "h": "<blockquote>&ldquo;There is little success where there is little laughter.&rdquo; &mdash; <footer>Andrew Carnegie</footer></blockquote>"
    },
    {
    "q": "Just throw away all thoughts of imaginary things, and stand firm in that which you are.",
    "a": "Kabir",
    "c": "87",
    "h": "<blockquote>&ldquo;Just throw away all thoughts of imaginary things, and stand firm in that which you are.&rdquo; &mdash; <footer>Kabir</footer></blockquote>"
    },
    {
    "q": "The greatest step towards a life of simplicity is to learn to let go.",
    "a": "Steve Maraboli",
    "c": "69",
    "h": "<blockquote>&ldquo;The greatest step towards a life of simplicity is to learn to let go.&rdquo; &mdash; <footer>Steve Maraboli</footer></blockquote>"
    },
    {
    "q": "I know not all that may be coming, but be it what it will, I'll go to it laughing.",
    "a": "Herman Melville",
    "c": "82",
    "h": "<blockquote>&ldquo;I know not all that may be coming, but be it what it will, I'll go to it laughing.&rdquo; &mdash; <footer>Herman Melville</footer></blockquote>"
    },
    {
    "q": "The very essence of instinct is that it's followed independently of reason.",
    "a": "Charles Darwin",
    "c": "75",
    "h": "<blockquote>&ldquo;The very essence of instinct is that it's followed independently of reason.&rdquo; &mdash; <footer>Charles Darwin</footer></blockquote>"
    },
    {
    "q": "The businessman's tool is value.",
    "a": "Ayn Rand",
    "c": "32",
    "h": "<blockquote>&ldquo;The businessman's tool is value.&rdquo; &mdash; <footer>Ayn Rand</footer></blockquote>"
    },
    {
    "q": "Peace is not absence of conflict, it is the ability to handle conflict by peaceful means.",
    "a": "Ronald Reagan",
    "c": "89",
    "h": "<blockquote>&ldquo;Peace is not absence of conflict, it is the ability to handle conflict by peaceful means.&rdquo; &mdash; <footer>Ronald Reagan</footer></blockquote>"
    },
    {
    "q": "Life begins where fear ends.",
    "a": "Osho",
    "c": "28",
    "h": "<blockquote>&ldquo;Life begins where fear ends.&rdquo; &mdash; <footer>Osho</footer></blockquote>"
    },
    {
    "q": "Faithless is he that says farewell when the road darkens.",
    "a": "J.R.R. Tolkien",
    "c": "57",
    "h": "<blockquote>&ldquo;Faithless is he that says farewell when the road darkens.&rdquo; &mdash; <footer>J.R.R. Tolkien</footer></blockquote>"
    },
    {
    "q": "Work joyfully and peacefully, knowing that right thoughts and right efforts inevitably bring about right results.",
    "a": "James Allen",
    "c": "113",
    "h": "<blockquote>&ldquo;Work joyfully and peacefully, knowing that right thoughts and right efforts inevitably bring about right results.&rdquo; &mdash; <footer>James Allen</footer></blockquote>"
    },
    {
    "q": "Time heals what reason cannot.  ",
    "a": "Seneca",
    "c": "32",
    "h": "<blockquote>&ldquo;Time heals what reason cannot.  &rdquo; &mdash; <footer>Seneca</footer></blockquote>"
    },
    {
    "q": "Hope and fear come from feeling that we lack something; they come from a sense of poverty.",
    "a": "Pema Chodron",
    "c": "90",
    "h": "<blockquote>&ldquo;Hope and fear come from feeling that we lack something; they come from a sense of poverty.&rdquo; &mdash; <footer>Pema Chodron</footer></blockquote>"
    },
    {
    "q": "Respect was invented to cover the empty place where love should be.",
    "a": "Leo Tolstoy",
    "c": "67",
    "h": "<blockquote>&ldquo;Respect was invented to cover the empty place where love should be.&rdquo; &mdash; <footer>Leo Tolstoy</footer></blockquote>"
    },
    {
    "q": "Words used to attract the dull of wit are not to be relied on.",
    "a": "Huang Po",
    "c": "62",
    "h": "<blockquote>&ldquo;Words used to attract the dull of wit are not to be relied on.&rdquo; &mdash; <footer>Huang Po</footer></blockquote>"
    },
    {
    "q": "If you only knew the magnificence of the 3, 6, and 9, then you would have a key to the universe.",
    "a": "Nikola Tesla",
    "c": "96",
    "h": "<blockquote>&ldquo;If you only knew the magnificence of the 3, 6, and 9, then you would have a key to the universe.&rdquo; &mdash; <footer>Nikola Tesla</footer></blockquote>"
    },
    {
    "q": "The real art in learning takes place as we move beyond proficiency, when our work becomes an expression of our essence.",
    "a": "Josh Waitzkin",
    "c": "119",
    "h": "<blockquote>&ldquo;The real art in learning takes place as we move beyond proficiency, when our work becomes an expression of our essence.&rdquo; &mdash; <footer>Josh Waitzkin</footer></blockquote>"
    },
    {
    "q": "Chase your passion, not your pension. ",
    "a": "Denis Waitley",
    "c": "38",
    "h": "<blockquote>&ldquo;Chase your passion, not your pension. &rdquo; &mdash; <footer>Denis Waitley</footer></blockquote>"
    },
    {
    "q": "Why compare yourself with others? No one in the entire world can do a better job of being you than you.",
    "a": "Unknown",
    "c": "103",
    "h": "<blockquote>&ldquo;Why compare yourself with others? No one in the entire world can do a better job of being you than you.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
    },
    {
    "q": "To be able to forget means sanity.",
    "a": "Jack London",
    "c": "34",
    "h": "<blockquote>&ldquo;To be able to forget means sanity.&rdquo; &mdash; <footer>Jack London</footer></blockquote>"
    },
    {
    "q": "When you want to be honored by others, you learn to honor them first.",
    "a": "Sathya Sai Baba",
    "c": "69",
    "h": "<blockquote>&ldquo;When you want to be honored by others, you learn to honor them first.&rdquo; &mdash; <footer>Sathya Sai Baba</footer></blockquote>"
    },
    {
    "q": "Words can only have a positive effect on others if and when they are ready to listen.",
    "a": "Christopher Reeve",
    "c": "85",
    "h": "<blockquote>&ldquo;Words can only have a positive effect on others if and when they are ready to listen.&rdquo; &mdash; <footer>Christopher Reeve</footer></blockquote>"
    },
    {
    "q": "Some people find fault like there is a reward for it.  ",
    "a": "Zig Ziglar",
    "c": "55",
    "h": "<blockquote>&ldquo;Some people find fault like there is a reward for it.  &rdquo; &mdash; <footer>Zig Ziglar</footer></blockquote>"
    },
    {
    "q": "Judge your success by what you had to give up in order to get it.",
    "a": "Dalai Lama",
    "c": "65",
    "h": "<blockquote>&ldquo;Judge your success by what you had to give up in order to get it.&rdquo; &mdash; <footer>Dalai Lama</footer></blockquote>"
    },
    {
    "q": "From morning till night, we should never rely on a single thing.",
    "a": "Huang Po",
    "c": "64",
    "h": "<blockquote>&ldquo;From morning till night, we should never rely on a single thing.&rdquo; &mdash; <footer>Huang Po</footer></blockquote>"
    },
    {
    "q": "Keep your face always toward the sunshine -  shadows will fall behind you.",
    "a": "Walt Whitman",
    "c": "74",
    "h": "<blockquote>&ldquo;Keep your face always toward the sunshine -  shadows will fall behind you.&rdquo; &mdash; <footer>Walt Whitman</footer></blockquote>"
    },
    {
    "q": "The world doesn't owe you anything. It was here first.",
    "a": "Mark Twain",
    "c": "54",
    "h": "<blockquote>&ldquo;The world doesn't owe you anything. It was here first.&rdquo; &mdash; <footer>Mark Twain</footer></blockquote>"
    },
    {
    "q": "Learn from the rejection and turn it into an opportunity!",
    "a": "Mary Engelbreit",
    "c": "57",
    "h": "<blockquote>&ldquo;Learn from the rejection and turn it into an opportunity!&rdquo; &mdash; <footer>Mary Engelbreit</footer></blockquote>"
    },
    {
    "q": "Be not glad at the misfortune of another, though he may be your enemy. ",
    "a": "George Washington",
    "c": "71",
    "h": "<blockquote>&ldquo;Be not glad at the misfortune of another, though he may be your enemy. &rdquo; &mdash; <footer>George Washington</footer></blockquote>"
    },
    {
    "q": "We build too many walls and not enough bridges.",
    "a": "Isaac Newton",
    "c": "47",
    "h": "<blockquote>&ldquo;We build too many walls and not enough bridges.&rdquo; &mdash; <footer>Isaac Newton</footer></blockquote>"
    },
    {
    "q": "The greatest value of a picture is when it forces us to notice what we never expected to see.",
    "a": "John Tukey",
    "c": "93",
    "h": "<blockquote>&ldquo;The greatest value of a picture is when it forces us to notice what we never expected to see.&rdquo; &mdash; <footer>John Tukey</footer></blockquote>"
    },
    {
    "q": "Great loves too must be endured.",
    "a": "Coco Chanel",
    "c": "32",
    "h": "<blockquote>&ldquo;Great loves too must be endured.&rdquo; &mdash; <footer>Coco Chanel</footer></blockquote>"
    },
    {
    "q": "Everybody has talent, but ability takes hard work.",
    "a": "Michael Jordan",
    "c": "50",
    "h": "<blockquote>&ldquo;Everybody has talent, but ability takes hard work.&rdquo; &mdash; <footer>Michael Jordan</footer></blockquote>"
    },
    {
    "q": "Self-knowledge is the beginning of self-correction.",
    "a": "Norman Vincent Peale",
    "c": "51",
    "h": "<blockquote>&ldquo;Self-knowledge is the beginning of self-correction.&rdquo; &mdash; <footer>Norman Vincent Peale</footer></blockquote>"
    },
    {
    "q": "When you're the only sane person, you look like the only insane person.",
    "a": "Criss Jami",
    "c": "71",
    "h": "<blockquote>&ldquo;When you're the only sane person, you look like the only insane person.&rdquo; &mdash; <footer>Criss Jami</footer></blockquote>"
    },
    {
    "q": "Write to help yourself, publish to help others.",
    "a": "Jack Butcher",
    "c": "47",
    "h": "<blockquote>&ldquo;Write to help yourself, publish to help others.&rdquo; &mdash; <footer>Jack Butcher</footer></blockquote>"
    },
    {
    "q": "True wisdom comes to each of us when we realize how little we understand about life, ourselves, and the world around us.",
    "a": "Socrates",
    "c": "120",
    "h": "<blockquote>&ldquo;True wisdom comes to each of us when we realize how little we understand about life, ourselves, and the world around us.&rdquo; &mdash; <footer>Socrates</footer></blockquote>"
    },
    {
    "q": "In three words I can sum up everything I've learned about life: it goes on.",
    "a": "Robert Frost",
    "c": "75",
    "h": "<blockquote>&ldquo;In three words I can sum up everything I've learned about life: it goes on.&rdquo; &mdash; <footer>Robert Frost</footer></blockquote>"
    },
    {
    "q": "Your gift is something that you can do innately better than anything else.",
    "a": "Steve Harvey",
    "c": "74",
    "h": "<blockquote>&ldquo;Your gift is something that you can do innately better than anything else.&rdquo; &mdash; <footer>Steve Harvey</footer></blockquote>"
    },
    {
    "q": "The purpose of life is the life of purpose.",
    "a": "Robin Sharma",
    "c": "43",
    "h": "<blockquote>&ldquo;The purpose of life is the life of purpose.&rdquo; &mdash; <footer>Robin Sharma</footer></blockquote>"
    },
    {
    "q": "Intense love does not measure, it just gives.",
    "a": "Mother Teresa",
    "c": "45",
    "h": "<blockquote>&ldquo;Intense love does not measure, it just gives.&rdquo; &mdash; <footer>Mother Teresa</footer></blockquote>"
    },
    {
    "q": "If you pray for rain, be prepared to deal with some mud.",
    "a": "Mary Engelbreit",
    "c": "56",
    "h": "<blockquote>&ldquo;If you pray for rain, be prepared to deal with some mud.&rdquo; &mdash; <footer>Mary Engelbreit</footer></blockquote>"
    },
    {
    "q": "The few who do are the envy of the many who only watch.",
    "a": "Jim Rohn",
    "c": "55",
    "h": "<blockquote>&ldquo;The few who do are the envy of the many who only watch.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>"
    },
    {
    "q": "A simple rule in dealing with those who are hard to get along with is to remember that this person is striving to assert his superiority; and you must deal with him from that point of view.",
    "a": "Alfred Adler",
    "c": "189",
    "h": "<blockquote>&ldquo;A simple rule in dealing with those who are hard to get along with is to remember that this person is striving to assert his superiority; and you must deal with him from that point of view.&rdquo; &mdash; <footer>Alfred Adler</footer></blockquote>"
    }
    ]
    module.exports=data;