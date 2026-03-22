/* ═══════════════════════════════════════════════
   LOGICITY BY VIKASH — app.js
   Full Application Logic
   ═══════════════════════════════════════════════ */

'use strict';

/* ═══ DATA STORE ═══ */
const DATA = {

  posts: [
    {
      id: 'stoic-morning',
      title: 'The Stoic Morning: How Marcus Aurelius Built Unbreakable Discipline',
      cat: 'philosophy',
      catLabel: 'Philosophy',
      excerpt: 'Every morning, Marcus Aurelius reminded himself of the same truths. Not because he was afraid, but because clarity is a practice, not a destination.',
      date: 'Feb 12, 2026',
      time: '18 min read',
      emoji: '🌄',
      bg: 'linear-gradient(135deg,#0d0d1a 0%,#16213e 60%,#0f3460 100%)',
    },
    {
      id: 'binary-search',
      title: 'Binary Search Beyond Arrays',
      cat: 'coding',
      catLabel: 'Coding',
      excerpt: 'Coding: move with the technology!!',
      date: 'Sep 8, 2025',
      time: '15 min read',
      emoji: '💻',
      bg: 'linear-gradient(135deg,#0f1923,#1a3a4a)',
    },
    {
      id: 'hello-world-cpp-c',
      title: 'Your First Program: Hello World in C++ and C',
      cat: 'coding',
      catLabel: 'Coding',
      excerpt: 'Every programmer starts here. Learn the anatomy of your very first program in both C++ and C — line by line.',
      date: 'Mar 20, 2026',
      time: '23 min read',
      emoji: '👋',
      bg: 'linear-gradient(135deg,#0a1020,#1a2a4a)',
    },
    {
      id: 'power-of-subconscious-notes',
      title: 'The Power of your Subconsicous Mind by Joseph Murphy — Key Lessons',
      cat: 'book-summary',
      catLabel: 'Book Summary',
      excerpt: 'Your subconscious doesn’t argue—it obeys. Learn to guide it, and you unlock a life you once thought impossible.',
      date: 'Mar 1, 2025',
      time: '18 min read',
      emoji: '📗',
      bg: 'linear-gradient(135deg,#1a1000,#3a2800)',
    },
 {
      id: 'Thnik straight',
      title: 'Think Straight by Darious Foroux — Key Lessons',
      cat: 'book-summary',
      catLabel: 'Book Summary',
      excerpt: 'Clarity is not found—it is built. When you train your mind to think straight, decisions become power',
      date: 'sep , 2025',
      time: '15 min read',
      emoji: '📗',
      bg: 'linear-gradient(135deg,#1a1000,#3a2800)',
    },
    {
      id: 'why-i-code',
      title: 'Why I Code — A Student\'s Honest Reflection',
      cat: 'personal',
      catLabel: 'Personal',
      excerpt: 'It was never about the job. It started with curiosity and a blank terminal that felt infinite and humbling at the same time.',
      date: 'Mar 15, 2025',
      time: '4 min read',
      emoji: '🌿',
      bg: 'linear-gradient(135deg,#0a1a0a,#1a3a1a)',
    },
    {
      id: 'ekant-reflection',
      title: 'जब मैं एकांत था — When I Was in Solitude',
      cat: 'personal',
      catLabel: 'Personal',
      excerpt: 'एकांत में बैठकर जीवन के सवालों से सामना हुआ — सपने, अफसोस, और किताबों की ज़रूरत पर एक ईमानदार चिंतन।',
      date: 'Mar 8, 2026',
      time: '6 min read',
      emoji: '🪔',
      bg: 'linear-gradient(135deg,#1a0a00,#2a1500)',
    },
    {
      id: 'atomic-habits',
      title: 'Atomic Habits — The System That Changes Everything',
      cat: 'book-summary',
      catLabel: 'Book Summary',
      excerpt: 'James Clear distills the science of habit formation into one truth: systems beat goals every single time.',
      date: 'Apr 5, 2025',
      time: '5 min read',
      emoji: '⚗️',
      bg: 'linear-gradient(135deg,#1a0800,#3a1800)',
    },
    {
      id: 'learning-meta',
      title: 'Learning How to Learn — Meta-Skills That Matter',
      cat: 'notes',
      catLabel: 'Learning Notes',
      excerpt: 'The best learners aren\'t necessarily the smartest. They understand the process of learning itself and leverage it deliberately.',
      date: 'Apr 20, 2025',
      time: '7 min read',
      emoji: '🧠',
      bg: 'linear-gradient(135deg,#1a0a1a,#2a1a3a)',
    },
    {
      id: 'dp-from-scratch',
      title: 'Dynamic Programming: From Fear to Fluency',
      cat: 'coding',
      catLabel: 'Coding',
      excerpt: 'Dive into coding competitive world, lets goo',
      date: 'Dec 8, 2025',
      time: '12 min read',
      emoji: '⚡',
      bg: 'linear-gradient(135deg,#001a1a,#003a3a)',
    },
    {
      id: 'socrates-paradox',
      title: 'Why Socrates Was Wrong (And Right) About Knowledge',
      cat: 'philosophy',
      catLabel: 'Philosophy',
      excerpt: 'The famous "I know only one thing that is nothing" hides a deeper truth about the nature of expertise, confidence, and intellectual humility.',
      date: 'May 22, 2025',
      time: '9 min read',
      emoji: '🏛️',
      bg: 'linear-gradient(135deg,#1a1500,#2a2000)',
    },
  ],

  articles: {
    'stoic-morning': {
      title: 'The Stoic Morning: How Marcus Aurelius Built Unbreakable Discipline',
      cat: 'Philosophy',
      date: 'November 12, 2025',
      time: '8 min read',
      toc: ['The Emperor\'s Morning Ritual', 'Why Reminders Beat Motivation', 'The Practice of Memento Mori', 'Building Your Own Protocol'],
      content: `
        <h2 id="s0">The Emperor's Morning Ritual</h2>
        <p>Every morning, Marcus Aurelius — ruler of the most powerful empire in the world — sat with a journal. Not to plan conquests or issue edicts, but to remind himself of the most basic truths he already knew.</p>
        <p>He wrote things like: <em>"When you wake up in the morning, tell yourself: the people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous and surly."</em></p>
        <blockquote>"The impediment to action advances action. What stands in the way becomes the way."</blockquote>
        <p>This wasn't pessimism. It was preparation. Marcus was building a mind that could meet reality without being surprised by it.</p>

        <h2 id="s1">Why Reminders Beat Motivation</h2>
        <p>We live in a culture that chases motivation — waiting for the feeling before taking action. But Stoicism inverts this completely. You don't wait to feel disciplined. You act, and discipline follows the action.</p>
        <p>The Stoics understood something modern psychology is still proving: our minds are leaky. We know things and then forget them under pressure. A morning ritual is a system for plugging those leaks before the day's chaos begins.</p>
        <p>Think of it as a kind of mental maintenance — the same way you wouldn't skip brushing your teeth because you "don't feel like it," you shouldn't skip your philosophical preparation because motivation is low.</p>

        <h2 id="s2">The Practice of Memento Mori</h2>
        <p>One of the most striking Stoic practices is <em>memento mori</em> — remember that you will die. Before you react, before you worry, before you lose yourself in trivialities, you remember: this moment is finite, and therefore precious.</p>
        <p>Marcus used this not to be morbid, but to prioritize ruthlessly. If you could die tonight, does the petty argument you're having really matter? Does the inbox full of emails deserve your anxiety?</p>
        <blockquote>"You could leave life right now. Let that determine what you do and say and think."</blockquote>

        <h2 id="s3">Building Your Own Protocol</h2>
        <p>You don't need to be an emperor to adopt a Stoic morning. Here's what I do consistently:</p>
        <ul>
          <li>Journal for 10 minutes — no agenda, just thinking on paper</li>
          <li>Write one thing I'm genuinely grateful for</li>
          <li>Read one page of philosophy or a book I'm working through</li>
          <li>Set one clear intention for the day</li>
        </ul>
        <p>The ritual isn't magic. It's just a reliable way to show up as the person you want to be — before the world has a chance to make you otherwise. Consistency over intensity, always.</p>
      `
    },
    'binary-search': {
      title: 'Binary Search Beyond Arrays',
      cat: 'Coding',
      date: 'February 3, 2026',
      time: '5 min read',
      toc: ['The Classic Problem', 'The Generalized Concept', 'Binary Search on Answers', 'Practice Problems'],
      content: `
        <h2 id="s0">The Classic Problem</h2>
        <p>Binary search starts with a simple premise: if you have a sorted array and want to find a target, you can eliminate half the options with each comparison. Time complexity: O(log n).</p>
        <pre data-lang="python"><code><span class="kw">def</span> <span class="fn">binary_search</span>(arr, target):
    left, right = <span class="num">0</span>, len(arr) - <span class="num">1</span>

    <span class="kw">while</span> left <= right:
        mid = (left + right) // <span class="num">2</span>

        <span class="kw">if</span> arr[mid] == target:
            <span class="kw">return</span> mid
        <span class="kw">elif</span> arr[mid] < target:
            left = mid + <span class="num">1</span>
        <span class="kw">else</span>:
            right = mid - <span class="num">1</span>

    <span class="kw">return</span> -<span class="num">1</span>  <span class="cm"># not found</span></code></pre>

        <h2 id="s1">The Generalized Concept</h2>
        <p>Here's the insight that unlocks competitive programming: binary search is not about arrays. It's about <em>any monotonic search space where you can verify a condition and eliminate half the possibilities</em>.</p>
        <p>The key template is: if <code>condition(mid)</code> is true, adjust <code>right = mid</code>, else <code>left = mid + 1</code>. You're bisecting based on a monotonic predicate.</p>
        <blockquote>Binary search works wherever a decision boundary exists — where everything on one side is "yes" and everything on the other is "no".</blockquote>

        <h2 id="s2">Binary Search on Answers</h2>
        <p>One of the most powerful applications is "binary search on the answer." Instead of searching for a value in an array, you search for the answer to an optimization problem.</p>
        <pre data-lang="python"><code><span class="kw">def</span> <span class="fn">min_days_to_complete</span>(tasks, workers, max_tasks_per_day):
    <span class="cm"># Binary search on the answer: "is D days enough?"</span>
    <span class="kw">def</span> <span class="fn">feasible</span>(days):
        <span class="kw">return</span> days * workers * max_tasks_per_day >= tasks

    left, right = <span class="num">1</span>, tasks
    <span class="kw">while</span> left < right:
        mid = (left + right) // <span class="num">2</span>
        <span class="kw">if</span> feasible(mid):
            right = mid
        <span class="kw">else</span>:
            left = mid + <span class="num">1</span>
    <span class="kw">return</span> left</code></pre>

        <h2 id="s3">Practice Problems</h2>
        <ul>
          <li><strong>LeetCode 704</strong> — Binary Search (classic warmup)</li>
          <li><strong>LeetCode 875</strong> — Koko Eating Bananas (binary search on answer)</li>
          <li><strong>LeetCode 1011</strong> — Capacity To Ship Packages</li>
          <li><strong>LeetCode 410</strong> — Split Array Largest Sum (hard)</li>
          <li><strong>Codeforces 1598C</strong> — I Love 1543 (monotonic predicate)</li>
        </ul>
      `
    },
    'hello-world-cpp-c': {
      title: 'Your First Program: Hello World in C++ and C',
      cat: 'Coding',
      date: 'March 20, 2026',
      time: '3 min read',
      toc: ['What is a Program?', 'Hello World in C++', 'Hello World in C', 'C vs C++ — Key Differences'],
      content: `
        <h2 id="s0">What is a Program?</h2>
        <p>A program is a set of instructions you give to a computer. Before you build anything complex — algorithms, websites, games — you start with one simple task: make the machine say hello.</p>
        <p>This tradition dates back decades. It's not just a ritual — it's how you verify that your environment works, your compiler is set up, and you understand the basic structure of the language.</p>

        <h2 id="s1">Hello World in C++</h2>
        <pre data-lang="C++"><code>#include &lt;iostream&gt;  // preprocessing directive — cin (input) &amp; cout (output)
using namespace std; // avoids writing std:: repeatedly

int main() {          // main function — execution starts here
    cout &lt;&lt; "Hello World!";  // print output
    return 0;         // stop the program
}</code></pre>
        <p><strong>#include &lt;iostream&gt;</strong> is a <em>preprocessor directive</em> — it tells the compiler to include the Input/Output stream library. This gives you access to <code>cin</code> (character input) and <code>cout</code> (character output).</p>
        <p><strong>using namespace std;</strong> means you don't have to write <code>std::cout</code> every time — just <code>cout</code>. It saves repetition.</p>
        <p><strong>int main()</strong> is the entry point — every C++ program starts executing from here.</p>
        <p><strong>return 0;</strong> signals to the operating system that the program finished successfully.</p>

        <h2 id="s2">Hello World in C</h2>
        <pre data-lang="C"><code>#include &lt;stdio.h&gt;  // standard input-output header

int main() {
    printf("Hello World"); // output — scanf() is used for input
    return 0;
}</code></pre>
        <p><strong>#include &lt;stdio.h&gt;</strong> includes the Standard Input/Output header, giving you <code>printf()</code> for output and <code>scanf()</code> for input.</p>
        <p><strong>printf()</strong> (print formatted) sends text to the console. It's more explicit than <code>cout</code> and gives fine control over formatting.</p>

        <h2 id="s3">C vs C++ — Key Differences</h2>
        <ul>
          <li>C uses <code>printf</code> / <code>scanf</code> — C++ uses <code>cout</code> / <code>cin</code></li>
          <li>C++ supports <code>using namespace std;</code> — C does not have namespaces</li>
          <li>C++ is an extension of C — almost all valid C code runs in C++</li>
          <li>C is closer to the hardware; C++ adds object-oriented features on top</li>
        </ul>
        <blockquote>"Every expert was once a beginner who typed Hello World and smiled."</blockquote>
        <p>Save this program, compile it, run it. That feeling when it works — hold onto it. That's the whole reason we code.</p>
      `
    },
    'deep-work-notes': {
      title: 'Deep Work by Cal Newport — Key Lessons',
      cat: 'Book Summary',
      date: 'March 1, 2025',
      time: '6 min read',
      toc: ['The Core Thesis', 'The Four Philosophies', 'The Four Rules', 'My Takeaway'],
      content: `
        <h2 id="s0">The Core Thesis</h2>
        <p>Cal Newport argues that the ability to focus without distraction on cognitively demanding tasks is becoming both increasingly rare and increasingly valuable. Those who cultivate this skill will thrive in the economy of ideas.</p>
        <blockquote>"Deep Work: Professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit. These efforts create new value, improve your skill, and are hard to replicate."</blockquote>

        <h2 id="s1">The Four Philosophies of Deep Work</h2>
        <p><strong>Monastic</strong> — Eliminate all shallow obligations entirely. Maximize deep work by minimizing everything else. Think Knuth or Cormac McCarthy.</p>
        <p><strong>Bimodal</strong> — Divide time into clearly defined stretches devoted to deep pursuits and leave the rest open. Bill Gates' "Think Weeks" are a famous example.</p>
        <p><strong>Rhythmic</strong> — Schedule deep work at the same time every day, building a simple regular habit. The easiest philosophy to maintain for most people.</p>
        <p><strong>Journalistic</strong> — Fit deep work wherever you can into your schedule. Hardest to do — requires you to rapidly shift into deep focus mode.</p>

        <h2 id="s2">The Four Rules</h2>
        <ul>
          <li><strong>Work Deeply</strong> — Create rituals and routines to minimize friction. Embrace boredom as training.</li>
          <li><strong>Embrace Boredom</strong> — Resist the urge to switch attention at the slightest hint of boredom. Train your concentration muscle.</li>
          <li><strong>Quit Social Media</strong> — Apply the craftsman approach: adopt a tool only if its benefits substantially outweigh its costs.</li>
          <li><strong>Drain the Shallows</strong> — Schedule every minute of your day. Treat shallow work as a necessary evil, not the default.</li>
        </ul>

        <h2 id="s3">My Takeaway</h2>
        <p>This book restructured how I approach study sessions. I now block 90-minute deep work sessions in the morning, keep my phone in another room, and log my focused hours. The difference is remarkable — what used to take 3 fragmented hours now takes 90 focused minutes.</p>
        <p><strong>Rating: ⭐⭐⭐⭐⭐</strong> — Essential for any student or knowledge worker in the age of distraction.</p>
      `
    },
    'why-i-code': {
      title: 'Why I Code — A Student\'s Honest Reflection',
      cat: 'Personal',
      date: 'Jan 5, 2026',
      time: '4 min read',
      toc: ['The First Terminal', 'The Moment It Clicked', 'What Keeps Me Going', 'The Real Answer'],
      content: `
        <h2 id="s0">The First Terminal</h2>
        <p>The first time I opened a terminal, I typed <code>print("Hello")</code> and felt something shift. Not excitement exactly — more like recognition. Like meeting a version of your mind you didn't know existed.</p>
        <p>The machine did exactly what I told it to. Nothing more, nothing less. In a world full of ambiguity and social complexity, there was something deeply satisfying about that precision.</p>

        <h2 id="s1">The Moment It Clicked</h2>
        <p>Programming didn't click immediately. For weeks I was confused by indentation errors, scope issues, and logic bugs that made no sense to me. Then one afternoon, working through a recursion problem — the sum of a list — it suddenly crystallized.</p>
        <p>The machine was doing exactly what I told it to do. The bug wasn't the machine's fault. The bug was <em>my thinking</em>. And fixing it meant fixing the way I thought, not the code.</p>
        <blockquote>"Programming is the closest thing we have to a superpower — the ability to instruct machines to do your thinking at scale."</blockquote>

        <h2 id="s2">What Keeps Me Going</h2>
        <p>It's not the job prospects. It's the feeling of building a system that works. The elegance of an algorithm that solves a problem in O(log n) instead of O(n²). The moment when a 100-line program does something genuinely useful that you once had to do by hand.</p>
        <p>There's also the community. The collective knowledge of millions of programmers, freely shared through documentation, open source, and Stack Overflow. It's the most generous intellectual commons in human history.</p>

        <h2 id="s3">The Real Answer</h2>
        <p>Why do I code? Because it teaches me to think — not just about computers, but about everything. How to break down complex problems. How to test assumptions. How to iterate toward a solution without knowing the answer upfront.</p>
        <p>Code is just the medium. The skill is thinking. And thinking clearly — precisely, systematically, humbly — is the most valuable thing a person can do.</p>
      `
    },
    'ekant-reflection': {
      title: 'जब मैं एकांत था — When I Was in Solitude',
      cat: 'Personal',
      date: 'March 8, 2026',
      time: '6 min read',
      toc: ['एकांत और पुरानी यादें', 'सपनों के सवाल', 'Research की असलियत', 'किताबें — असली इलाज'],
      content: `
        <h2 id="s0">एकांत और पुरानी यादें</h2>
        <p>जब मैं एकांत बैठा था, बिती हुई सारी दुश्वारीयां याद आने लगी — वो लम्हें, वो गलतियां, वो पल, मम्मी की बताई बातें, पापा के कुछ इरादें, दोस्तों के साथ पढ़ी-लिखी बदमाशियां, भाई-बहनों के साथ थोड़ी नोक झोक।</p>
        <p>और एक ही अफसोस — कि उस वक्त थोड़ी किताबें पढ़ लिया होता। खैर, एकांत बैठना भी एक कला है — उससे भी बड़ा, एकांत बैठने में अपना ही भला है।</p>
        <blockquote>बैठोगे तो एक घुटन सी महसूस होगी। पीछे देखने पर बहुत सारे काले धब्बे दिखाई देंगे।</blockquote>
        <p>Marksheet के अलावा वो काम, वो बातें याद आएंगी जो नहीं करनी चाहिए थीं — और कुछ जो करनी भी चाहिए थी, जो नहीं किया।</p>

        <h2 id="s1">सपनों के सवाल</h2>
        <p>जब मैं एकांत बैठा था, तो कई सारे सपनों से घिरा बैठा था। इनका कहना था — <em>अभी तक क्या कर रहे हो?</em></p>
        <p>ये सपने कोई भोग-विलास वाले नहीं थे। ये मेरे से सवाल कर रहे थे — <em>कब तक करोगे ये सब? ये तुम्हारे जीवन में क्या Impact लाएंगे? सिर्फ तुम अपने लिए पढ़ रहे हो? ये ज्ञान किसी के काम आएंगे?</em></p>
        <p>अपने परिवार को कब एक ऊंचे स्थान पर खड़े करोगे? अपने गांव व समाज वालों को कैसे बताओगे कि मैंने सिर्फ विद्या ही नहीं, अविद्या भी अर्जित करी है? <strong>जीवन बहुत छोटी है — कभी भी बिखर जाएगी।</strong></p>
        <p>ऐसी तमाम प्रश्नों से घिरा बैठा था। धीरे-धीरे अफसोस के साथ-साथ डर सा भी लगने लगा।</p>

        <h2 id="s2">Research की असलियत</h2>
        <p>डर इस बात का — कि ये सवाल अकेले बैठने पर ही क्यों आते हैं? तब जाके समझ आया — ये सवाल research करने पर आते हैं। अफसोस कि आजकल किसी के पास इतना समय नहीं है — और सही मायने में इतना साहस किसी में नहीं है कि वे कोई research कर सकें।</p>
        <blockquote>"Research is what I'm doing when I don't know what I'm doing." — Wernher von Braun</blockquote>
        <p>लेकिन आजकल तो लोग सब कुछ जानते हैं — उनको कोई Research नहीं करनी। Instagram पर reel scroll करने से मन भर जाए तो YouTube पर थोड़ी लंबी video, और WhatsApp university का ज्ञान ही परम है इन दिनों।</p>
        <p>अपने बारे में जानना, अपनी कमियों को दूर करना, अपने आप से सवाल करना, एक घेरे से बाहर निकलकर उसका जवाब ढूंढना, अपने बारे में कुछ लिखना — यही सर्वसः ज्ञान की ओर अग्रसरता है।</p>

        <h2 id="s3">किताबें — असली इलाज</h2>
        <p>और इन सबका एक प्रभावी इलाज है — <strong>किताबें पढ़ना।</strong> किताबें आपको अपने बारे में ही नहीं, बल्कि दुनिया की वो सारी बातें तलाश करने में मजबूर कर देंगी जो आपके और पूरी दुनिया के लिए जरूरी हैं।</p>
        <p>किताब सरल, सहज और सुलझा बनाती है — और जीवन में और चाहिए ही क्या?</p>
        <blockquote>"The ultimate goal of your life should be Happy."</blockquote>
        <p>आजकल एक बड़ी समस्या उमड़ आई है — सबको पता है क्या करनी चाहिए? लेकिन लोग वो सारी चीजें कर रहे हैं जो नहीं करनी चाहिए, सिवाए जो करनी चाहिए।</p>
        <p>मैं तो लिखता हूं और पढ़ता भी हूं — क्योंकि मेरे अंदर डर है, डर है समय निकल जाने का। लगन है, लगन है कुछ अलग कर जाने का। चाहत है, चाहत है सत्य को उजागर करने का।</p>
        <p>मुंशी प्रेमचंद कहते हैं — <em>"लिखते तो वह लोग हैं, जिनके अंदर कुछ दर्द है, अनुराग है, लगन है, विचार है। जिन्होंने धन और भोग-विलास को जीवन का लक्ष्य बना लिया है, वह क्या लिखेंगे?"</em></p>
      `
    },
    'atomic-habits': {
      title: 'Atomic Habits — The System That Changes Everything',
      cat: 'Book Summary',
      date: 'April 5, 2025',
      time: '5 min read',
      toc: ['The Core Insight', 'The Four Laws of Behavior Change', 'Identity-Based Habits', 'Key Takeaways'],
      content: `
        <h2 id="s0">The Core Insight</h2>
        <p>James Clear's central argument is deceptively simple: habits are the compound interest of self-improvement. A 1% improvement every day leads to 37x improvement in a year. A 1% decline leads to nearly zero.</p>
        <blockquote>"You do not rise to the level of your goals. You fall to the level of your systems."</blockquote>
        <p>This reframe from goals to systems is the book's most powerful contribution. Goals are about the results you want; systems are about the processes that lead to those results.</p>

        <h2 id="s1">The Four Laws of Behavior Change</h2>
        <p>Clear offers a simple framework for building good habits and breaking bad ones:</p>
        <ul>
          <li><strong>Make it Obvious</strong> — Design your environment to signal the behavior you want.</li>
          <li><strong>Make it Attractive</strong> — Pair habits you need with habits you want (temptation bundling).</li>
          <li><strong>Make it Easy</strong> — Reduce friction. The 2-minute rule: scale habits down until they take 2 minutes.</li>
          <li><strong>Make it Satisfying</strong> — Immediate rewards matter more than delayed ones for habit formation.</li>
        </ul>
        <p>To break a bad habit, invert each law: make it invisible, unattractive, difficult, and unsatisfying.</p>

        <h2 id="s2">Identity-Based Habits</h2>
        <p>The most durable habits are the ones tied to your identity. Instead of "I want to read more," you tell yourself "I am a reader." Every action becomes a vote for the identity you want to become.</p>
        <p>This is why "never miss twice" works — one missed habit is an accident; two is the start of a new pattern.</p>

        <h2 id="s3">Key Takeaways</h2>
        <ul>
          <li>Habits are the compound interest of self-improvement.</li>
          <li>Small improvements, consistently applied, lead to remarkable results.</li>
          <li>Your environment shapes your behavior more than your willpower does.</li>
          <li>Identity-based habits are more durable than outcome-based habits.</li>
        </ul>
        <p><strong>Rating: ⭐⭐⭐⭐⭐</strong> — The best practical book on habit formation I've read.</p>
      `
    },
    'dp-from-scratch': {
      title: 'Dynamic Programming: From Fear to Fluency',
      cat: 'Coding',
      date: 'May 8, 2025',
      time: '12 min read',
      toc: ['Why DP Feels Hard', 'The Two Ingredients', 'The Fibonacci Ladder', 'The Knapsack Pattern', 'Practice Path'],
      content: `
        <h2 id="s0">Why DP Feels Hard</h2>
        <p>Dynamic programming has a reputation for being the hardest topic in competitive programming. But after months of practicing it, I've realized: the difficulty isn't conceptual. It's in recognizing the pattern.</p>
        <p>DP is not a special algorithm. It's a way of thinking about <em>any problem where the answer to a big problem depends on the answers to smaller versions of the same problem</em>.</p>

        <h2 id="s1">The Two Ingredients</h2>
        <p>Every DP problem has exactly two properties:</p>
        <p><strong>1. Overlapping Subproblems</strong> — The same sub-calculation appears multiple times. Without this, you don't need memoization.</p>
        <p><strong>2. Optimal Substructure</strong> — The optimal solution to a problem contains optimal solutions to its subproblems. Without this, DP gives wrong answers.</p>

        <h2 id="s2">The Fibonacci Ladder</h2>
        <pre data-lang="python"><code><span class="cm"># Naive recursion — O(2^n) ❌</span>
<span class="kw">def</span> <span class="fn">fib_naive</span>(n):
    <span class="kw">if</span> n <= <span class="num">1</span>: <span class="kw">return</span> n
    <span class="kw">return</span> fib_naive(n-<span class="num">1</span>) + fib_naive(n-<span class="num">2</span>)

<span class="cm"># Top-down DP (memoization) — O(n) ✅</span>
<span class="kw">from</span> functools <span class="kw">import</span> lru_cache

<span class="dec">@lru_cache</span>(maxsize=<span class="kw">None</span>)
<span class="kw">def</span> <span class="fn">fib_memo</span>(n):
    <span class="kw">if</span> n <= <span class="num">1</span>: <span class="kw">return</span> n
    <span class="kw">return</span> fib_memo(n-<span class="num">1</span>) + fib_memo(n-<span class="num">2</span>)

<span class="cm"># Bottom-up DP (tabulation) — O(n) time, O(1) space ✅</span>
<span class="kw">def</span> <span class="fn">fib_dp</span>(n):
    a, b = <span class="num">0</span>, <span class="num">1</span>
    <span class="kw">for</span> _ <span class="kw">in</span> range(n):
        a, b = b, a + b
    <span class="kw">return</span> a</code></pre>

        <h2 id="s3">The Knapsack Pattern</h2>
        <pre data-lang="python"><code><span class="kw">def</span> <span class="fn">knapsack</span>(capacity, weights, values):
    n = len(weights)
    <span class="cm"># dp[i][w] = max value with first i items and capacity w</span>
    dp = [[<span class="num">0</span>] * (capacity + <span class="num">1</span>) <span class="kw">for</span> _ <span class="kw">in</span> range(n + <span class="num">1</span>)]

    <span class="kw">for</span> i <span class="kw">in</span> range(<span class="num">1</span>, n + <span class="num">1</span>):
        <span class="kw">for</span> w <span class="kw">in</span> range(capacity + <span class="num">1</span>):
            <span class="cm"># Don't take item i</span>
            dp[i][w] = dp[i-<span class="num">1</span>][w]
            <span class="cm"># Take item i (if it fits)</span>
            <span class="kw">if</span> weights[i-<span class="num">1</span>] <= w:
                dp[i][w] = max(dp[i][w],
                    dp[i-<span class="num">1</span>][w - weights[i-<span class="num">1</span>]] + values[i-<span class="num">1</span>])

    <span class="kw">return</span> dp[n][capacity]</code></pre>

        <h2 id="s4">Practice Path</h2>
        <ul>
          <li><strong>Easy:</strong> LeetCode 70 (Climbing Stairs), 509 (Fibonacci), 198 (House Robber)</li>
          <li><strong>Medium:</strong> LeetCode 300 (LIS), 322 (Coin Change), 416 (Partition Equal Subset)</li>
          <li><strong>Hard:</strong> LeetCode 1143 (LCS), 312 (Burst Balloons), 10 (Regular Expression)</li>
        </ul>
      `
    },
  },

  books: [
    /* ══════════════════════════════════════════════════
       ✦  GODAN — NEW ENTRY (added with real photo)
    ══════════════════════════════════════════════════ */
    {
      id: 'godan',
      title: 'गोदान',
      author: 'मुंशी प्रेमचंद',
      emoji: '🌾',
      img: 'godan.jpg',                // place godan.jpg in your project root
      bg: 'linear-gradient(135deg,#2C1810 0%,#5C2E1A 50%,#8B4513 100%)',
      rating: 5,
      summary: 'भावनाओं का सागर, गाँवों की व्यवस्था, किसान और मजदूरों की तड़प — गोदान (1936) हिंदी साहित्य का सर्वश्रेष्ठ उपन्यास है। होरी की एक गाय का सपना पूरे भारत के किसान की त्रासदी का प्रतीक बन जाता है।',
      lessons: [
        'किसान का शोषण सदियों से जारी है — ज़मींदार, साहूकार और व्यवस्था मिलकर उसे निचोड़ते हैं',
        'गाय सिर्फ पशु नहीं, बल्कि होरी की आस्था, सम्मान और सपने का प्रतीक है',
        'अपने ही लोग सबसे बड़ा दुख दे सकते हैं — होरी के भाई ने ही गाय को ज़हर दिया',
        'स्त्री (धनिया) की शक्ति और साहस किसी से कम नहीं होता',
        'सपने जीते-जी पूरे न हों, तो मरते वक्त भी अधूरे रह जाते हैं',
        'शहर और गाँव — दो अलग दुनियाएँ, पर इंसान की तड़प एक जैसी',
      ],
      quotes: [
        '"यही गोदान है।" — धनिया के ये दो शब्द पूरे भारत के किसान की त्रासदी को समेट लेते हैं।',
        '"लिखते तो वह लोग हैं, जिनके अंदर कुछ दर्द है, अनुराग है, लगन है, विचार है।" — मुंशी प्रेमचंद',
      ],
      hindiContent: `
        <h2 id="s0">उपन्यास का परिचय</h2>
        <p>आज़ादी से पहले मुंशी प्रेमचंद द्वारा रचित यह उपन्यास केवल एक कथा ही नहीं बल्कि भावनाओं का सागर है — गाँवों की अव्यवस्था, किसान और मजदूरों की तड़प, समाज की विसंगतियां, अंधविश्वास, उत्पीडन और पीड़ा की सच्ची तस्वीर प्रस्तुत करता है <strong>गोदान।</strong></p>
        <p>मुंशी प्रेमचंद (धनपत राय — जिन्हें <em>"उपन्यास सम्राट"</em> के नाम से भी जाना जाता है) की चिर-परिचित शैली का जीता-जागता उदाहरण है गोदान, जो विश्व की कई भाषाओं में अनुवाद होकर बिकने का गौरव प्राप्त करता है।</p>

        <h2 id="s1">होरी — एक किसान का सपना</h2>
        <p>होरी एक गरीब किसान और उसका परिवार — धर्म के पक्के, इंसानियत का मशाल, गाँव-समाज की विसंगतियों से घिरे हुए। होरी का एक सपना था — <em>घर में एक सुडौल, बड़ी-बड़ी सींघों वाली दुधारू गाय हो जब दरवाजे पर बंधे तो लोग देखते रह जाएं, जिससे उसकी सम्मान कायम रहे।</em></p>
        <p>बड़ी मसक्कत से गाय तो आ गई — मुदा होरी और उसके परिवार की खुशी किसी को देखी नहीं गई। पड़ोसियों की करतूत से वह बच न पाई। होरी कुल चार भाई था, तीन साल पहले सब अलग हो गए थे... पता चला कि <strong>होरी के भाई ने ही गाय को रोटी में ज़हर मिलाकर दे दिया था।</strong> गाय की खुशी पानी की तरह बह जाती है।</p>
        <blockquote>अपने ही लोग सबसे गहरा ज़ख्म देते हैं। यही गोदान की सबसे कड़वी सच्चाई है।</blockquote>

        <h2 id="s2">दो दुनियाएँ — एक तड़प</h2>
        <p>यह उपन्यास दो दुनियाओं को एक साथ दिखाता है — एक तरफ होरी का <strong>गाँव,</strong> जहाँ गरीबी, जात-पात, अपने ही लोगों का बदलना और शोषण का अंधेरा है; दूसरी तरफ <strong>शहर की चाहरदीवारी,</strong> जहाँ मिस्टर मेहता और मालती जैसे पढ़े-लिखे लोग आधुनिकता और प्रेम की उलझनों में हैं।</p>
        <p>मिस्टर मेहता — दर्शन, विज्ञान के मर्मज्ञ — जिनके लिए वर्तमान ही सब कुछ है और प्रेम ही ईश्वर है। जो यह सोचता है कि कैसे एक आम आदमी की ऐसी दशा हो सकती है? जिसे गरीबों के बीच बैठकर लगता है जैसे पक्षी अपने घोंसले में आ गई। दोनों दुनियाएँ अलग हैं — पर दोनों में इंसान की तड़प एक जैसी है।</p>

        <h2 id="s3">अंत — सबसे मार्मिक दृश्य</h2>
        <p>इस उपन्यास का अंत उतना ही मार्मिक है जितनी शुरुआत। होरी मजदूरी करते-करते दम तोड़ देता है। मरते वक्त वह गाय नहीं खरीद पाया। धनिया के पास कुछ नहीं बचा। पड़ोसियों से माँगकर वह कुछ पैसे जुटाती है — और उन्हें पंडित के हाथ में देकर कहती है:</p>
        <blockquote style="font-size:1.3rem;font-style:italic;">"यही गोदान है।"</blockquote>
        <p>यह दो शब्द पूरे भारत के किसान की त्रासदी को समेट लेते हैं। एक सपना जो जीते-जी पूरा नहीं हुआ, मरते वक्त भी अधूरा रहा।</p>
        <p style="margin-top:1.5rem;color:var(--text-2)"><em>होरी का दर्द आज भी ज़िंदा है — बस यही है गोदान।</em></p>
      `,
    },
    {
      id: 'meditations',
      title: 'Meditations',
      author: 'Marcus Aurelius',
      emoji: '🏛️',
      bg: 'linear-gradient(135deg,#1a1500 0%,#2e2400 60%,#1a1200 100%)',
      img: 'meditation.jpeg',
      rating: 5,
      summary: 'A personal journal of Stoic philosophy written by the Roman Emperor. Raw, honest, and shockingly modern — a book Marcus never intended for publication.',
      lessons: [
        'We suffer more in imagination than in reality',
        'Focus only on what is within your control',
        'Every morning is a new opportunity to begin again',
        'The obstacle is the way — resistance shapes us',
        'How little is needed for a happy life',
      ],
      quotes: [
        'The impediment to action advances action. What stands in the way becomes the way.',
        'You have power over your mind — not outside events. Realize this, and you will find strength.',
        'If it is not right, do not do it; if it is not true, do not say it.',
      ],
    },
    {
      id: 'The Power Of Your Subconsicous Mind',
      title: 'The Power Of Your Subconsicous Mind',
      author: 'Joseph Murphy',
      emoji: '📗',
      bg: 'linear-gradient(135deg,#001a00 0%,#003300 60%,#001a0a 100%)',
      img: 'power.jpeg',
      rating: 5,
      summary: 'Your mind has two levels: the conscious (rational, logical) and the subconscious (emotional, habitual, automatic). The subconscious does not judge — it simply accepts whatever the conscious mind repeatedly tells it and works tirelessly to make it real. This makes it an incredibly powerful force that can either work for you or against you, depending on what you feed it.',
      lessons: [
        'The Subconscious Accepts What You Believe It cannot distinguish between what is real and what is vividly imagined',         
        ' The Law of Belief Whatever you truly believe — not just say, but feel — becomes your reality. Belief is the bridge between desire and manifestation.',
        'The Importance of Sleep The period just before falling asleep is a "golden window.',
        'Avoid Negative Self-Talk Phrases like "I can not," "I am not good enough," or "I always fail" are instructions to the subconscious. It hears them as commands and works to fulfill them.',
      ],
      quotes: [
        'Change your thoughts, and you change your destiny.',
      ],
    },
     {
      id: 'Think Straigth',
      title: 'Think Straigth',
      author: 'Darius Foroux',
      emoji: '📗',
      bg: 'linear-gradient(135deg,#001a00 0%,#003300 60%,#001a0a 100%)',
      img: 'think.jpeg',
      rating: 5,
      summary: 'It reveals the recipe for taking control of your mind so you can improve your whole life. The mind is the most powerful tool on the earth that cange the way you think.',
      lessons: [
        'Journal daily — writing forces you to organize and examine your thoughts clearly',         
        'Pause before reacting — insert a gap between stimulus and response',
        'Ask better questions — "What can I do about this?" beats "Why is this happening to me?"',
        'Limit mental junk food — endless scrolling and gossip pollute your thinking',
      ],
      quotes: [
        'The quality of your thinking determines the quality of your life.',
      ],
    },


    {
      id: 'atomic-habits-book',
      title: 'Atomic Habits',
      author: 'James Clear',
      emoji: '⚗️',
      bg: 'linear-gradient(135deg,#1a0800 0%,#3a1800 60%,#1a0a00 100%)',
      img: 'Atomic.jpg',
      rating: 5,
      summary: 'Tiny changes, remarkable results. The science of building good habits and eliminating bad ones, backed by research and beautifully explained.',
      lessons: [
        'Habits are the compound interest of self-improvement',
        'Make good habits obvious, attractive, easy, and satisfying',
        'Identity-based habits outlast outcome-based habits',
        'Never miss twice — one missed day is an accident, two is a new pattern',
        'You do not rise to your goals, you fall to your systems',
      ],
      quotes: [
        'You do not rise to the level of your goals, you fall to the level of your systems.',
        'Every action you take is a vote for the type of person you wish to become.',
      ],
    },
    {
  id: 'vidyarthi-jeevan',
  title: 'विद्यार्थी जीवन — पढ़ाई और मौज',
  author: 'आचार्य प्रशांत',
  emoji: '📚',
  img: 'studentlife.jpeg',
  bg: 'linear-gradient(135deg,#1a4a00 0%,#2d7a00 50%,#1a6600 100%)',
  rating: 5,
  summary: 'राष्ट्रीय बेस्टसेलर। यह किताब उन हर छात्र के लिए है जो पढ़ाई के बोझ तले दबा हुआ है — और यह नहीं जानता कि पढ़ाई और मौज साथ-साथ हो सकते हैं। आचार्य प्रशांत बताते हैं कि असली शिक्षा रटाई नहीं, बल्कि स्वयं को जानना है।',
  lessons: [
    'तुम्हें प्रेरणा नहीं, स्पष्टता चाहिए — motivation अस्थायी है, clarity टिकाऊ',
    'दूसरों की उम्मीदों के लिए जीना बंद करो — अपनी आवाज़ पहचानो',
    'डर और महत्वाकांक्षा एक नहीं हैं — डर से उठाया कदम तुम्हें तोड़ता है',
    'असली शिक्षा वो है जो तुम्हें खुद से मिलाए — परीक्षा से नहीं',
    'सोशल मीडिया की लत भीतरी खालीपन का लक्षण है',
    'सच्चा प्रेम तभी संभव है जब तुम पहले खुद को समझो',
  ],
  quotes: [
    '"तुम्हें बाहर से धकेले जाने की जरूरत नहीं — तुम्हें भीतर से जलने की जरूरत है।" — आचार्य प्रशांत',
    '"विद्यार्थी का सबसे बड़ा विषय भौतिकी या गणित नहीं — बल्कि स्वयं है।"',
  ],
  hindiContent: `
    <h2 id="s0">किताब क्यों पढ़ें?</h2>
    <p>यह किताब कोई साधारण self-help book नहीं है। यह उन सवालों से टकराती है जो हर छात्र के मन में होते हैं — <em>मैं पढ़ क्यों रहा हूँ? किसके लिए? क्या यही जीवन है?</em></p>
    <p>आचार्य प्रशांत — जो IIT Delhi और IIM Ahmedabad के पूर्व छात्र हैं — इस किताब में अपने उन अनुभवों और ज्ञान को साझा करते हैं जो किसी syllabus में नहीं मिलते।</p>
    <blockquote>"पढ़ाई और मौज — दोनों साथ हो सकते हैं, अगर तुम जानते हो कि पढ़ रहे क्यों हो।"</blockquote>

    <h2 id="s1">मूल संदेश</h2>
    <p>भारत का युवा वर्ग परिवार, समाज, शिक्षा और मीडिया की गहरी conditioning में जकड़ा हुआ है। अधिकतर छात्र वो करियर चुनते हैं जो माँ-बाप को पसंद हो, वो रिश्ते निभाते हैं जो समाज को मंजूर हो — और अपनी असली इच्छा को कभी जान ही नहीं पाते।</p>
    <p>प्रशांत कहते हैं — <strong>जब तक तुम खुद को नहीं जानते, हर निर्णय उधार लिया हुआ होगा।</strong></p>

    <h2 id="s2">छात्र जीवन की असली चुनौतियाँ</h2>
    <p>किताब उन सवालों से सीधे टकराती है जिन्हें कोई classroom में नहीं पूछता — करियर का भ्रम, परीक्षा का डर, रिश्तों की उलझन, सोशल मीडिया की लत, और माता-पिता की अपेक्षाओं का बोझ।</p>
    <p>इन सबका एक ही जड़ है — <em>स्वयं से अनजान होना।</em> और इसीलिए इस किताब का असली विषय है — <strong>आत्म-जागरूकता।</strong></p>

    <h2 id="s3">राष्ट्रीय बेस्टसेलर क्यों?</h2>
    <p>यह किताब लाखों छात्रों तक इसलिए पहुँची क्योंकि इसमें कोई fake positivity नहीं है। कोई "तुम कर सकते हो!" वाला नारा नहीं। बस एक सीधी, ईमानदार बात — <em>पहले जानो कि तुम हो कौन, बाकी सब अपने आप साफ हो जाएगा।</em></p>
    <blockquote>"विद्यार्थी का सबसे बड़ा विषय भौतिकी या गणित नहीं — बल्कि स्वयं है।"</blockquote>
  `,
},
    {
      id: 'thinking-fast',
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      emoji: '🧠',
      bg: 'linear-gradient(135deg,#001a1a 0%,#002a2a 60%,#001515 100%)',
      rating: 4,
      summary: 'A Nobel laureate\'s masterwork exploring the two systems of thinking that drive every decision you make — and how they systematically fail you.',
      lessons: [
        'System 1 is fast, intuitive, and often dangerously wrong',
        'Cognitive biases are predictable, systematic, and exploitable',
        'Overconfidence is the most dangerous and common bias',
        'Loss aversion shapes most economic and personal decisions',
        'We are not as rational as we believe ourselves to be',
      ],
      quotes: [
        'Nothing in life is as important as you think it is while you are thinking about it.',
        'A reliable way to make people believe in falsehoods is frequent repetition.',
      ],
    },
    {
      id: 'show-work',
      title: 'Show Your Work!',
      author: 'Austin Kleon',
      emoji: '✏️',
      bg: 'linear-gradient(135deg,#0a0a1a 0%,#1a1a2a 60%,#080818 100%)',
      rating: 4,
      summary: 'A liberating manifesto for sharing your creative process publicly and building an authentic audience while you learn and grow.',
      lessons: [
        'Share something small every single day',
        'Teach what you know — even if you\'re still learning',
        'Don\'t wait until you\'re an expert to start sharing',
        'Credit your influences generously and completely',
        'Your process is as interesting as your finished work',
      ],
      quotes: [
        'You don\'t have to be a genius, you just need to be yourself.',
        'Think about what you want to learn, and make a commitment to learning it in front of others.',
      ],
    },
    {
      id: 'man-meaning',
      title: "Man's Search for Meaning",
      author: 'Viktor Frankl',
      emoji: '🕯️',
      bg: 'linear-gradient(135deg,#1a1a1a 0%,#0a0a0a 60%,#121212 100%)',
      img:'book.jpeg',
      rating: 5,
      summary: 'A psychiatrist\'s account of surviving the Holocaust and the logotherapy framework he developed — that meaning, not pleasure, is the primary human motivation.',
      lessons: [
        'Meaning can be found even in unavoidable suffering',
        'We cannot avoid suffering but we can choose how to respond to it',
        'Freedom lies in our response to circumstances, not the circumstances themselves',
        'Love is the ultimate and highest goal to which we can aspire',
        'Life never ceases to have meaning — even in the worst circumstances',
      ],
      quotes: [
        'When we are no longer able to change a situation, we are challenged to change ourselves.',
        'Between stimulus and response there is a space. In that space is our power to choose our response.',
      ],
    },
  ],

  snippets: [
    {
      id: 'hello-world-cpp',
      lang: 'C++',
      title: 'Print Hello World with C++',
      tags: ['beginner', 'basics', 'hello-world'],
      img: 'coding.jpg',
      code: `#include <iostream>  // preprocessing directive — cin (input) & cout (output)
using namespace std; // avoids writing std:: repeatedly

int main() {          // main function — execution starts here
    cout << "Hello World!";  // print output
    return 0;         // stop the program
}`,
    },
    {
      id: 'hello-world-c',
      lang: 'C',
      title: 'Print Hello World with C',
      tags: ['beginner', 'basics', 'hello-world'],
      img: 'coding.jpg',
      code: `#include <stdio.h>  // standard input-output header

int main() {
    printf("Hello World"); // output — scanf() is used for input
    return 0;
}
// Almost all syntax is the same as C++`,
    },
    {
      id: 'binary-search-py',
      lang: 'Python',
      title: 'Binary Search Template',
      tags: ['algorithm', 'search', 'O(log n)'],
      code: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`,
    },
    {
      id: 'dp-fibonacci',
      lang: 'Python',
      title: 'DP — Fibonacci (Memoization)',
      tags: ['dp', 'memoization', 'recursion'],
      code: `from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

# Space optimized O(1)
def fib_opt(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a`,
    },
    {
      id: 'graph-bfs',
      lang: 'Python',
      title: 'BFS Graph Traversal',
      tags: ['graph', 'bfs', 'queue'],
      code: `from collections import deque

def bfs(graph, start):
    visited = {start}
    queue = deque([start])
    order = []

    while queue:
        node = queue.popleft()
        order.append(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    return order`,
    },
    {
      id: 'two-pointers',
      lang: 'Python',
      title: 'Two Pointers Pattern',
      tags: ['algorithm', 'array', 'pattern'],
      code: `def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        total = arr[left] + arr[right]
        if total == target:
            return [left, right]
        elif total < target:
            left += 1
        else:
            right -= 1
    return []`,
    },
    {
      id: 'react-hook',
      lang: 'JavaScript',
      title: 'Custom Hook — useDebounce',
      tags: ['react', 'hooks', 'performance'],
      code: `import { useState, useEffect } from 'react';

function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}`,
    },
    {
      id: 'sliding-window',
      lang: 'Python',
      title: 'Sliding Window — Max Sum Subarray',
      tags: ['algorithm', 'array', 'sliding-window'],
      code: `def max_sum_subarray(arr, k):
    if len(arr) < k:
        return -1

    window_sum = sum(arr[:k])
    max_sum = window_sum

    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, window_sum)

    return max_sum`,
    },
  ],

  philosophy: [
    {
      quote: 'The unexamined life is not worth living — but the over-examined life isn\'t either.',
      body: 'Socrates gave us the first half of this idea. The second half is earned through experience. There\'s a version of introspection that becomes avoidance. When thinking about your life replaces the living of it, philosophy becomes a sophisticated escape from reality rather than a guide through it.',
      date: 'May 2025',
    },
    {
      quote: 'Control the controllables. Everything else is information.',
      body: 'The Stoics were obsessed with the dichotomy of control. Epictetus calls it the core of the philosophical project: some things are in our power (our judgments, impulses, desires) and some are not (body, reputation, property, other people). The wise person lives entirely in the first category and treats the second as neutral data.',
      date: 'April 2025',
    },
    {
      quote: 'You can\'t step into the same river twice — and you\'re not the same person who tried.',
      body: 'Heraclitus said everything flows. We live as if we can pause time — hold a relationship, a feeling, a version of ourselves in amber. But impermanence isn\'t the enemy of meaning. It\'s the source of it. Things matter precisely because they don\'t last. The cherry blossom is beautiful because it falls.',
      date: 'March 2025',
    },
    {
      quote: 'Truth is not found; it is built — slowly, with the bricks of failed beliefs.',
      body: 'Epistemology is humbling. The more you study how we know what we know, the less certain you become about everything. But that\'s not nihilism — it\'s intellectual honesty. The goal isn\'t certainty. It\'s better-calibrated uncertainty. Updating your beliefs when evidence demands it is not weakness; it is the entire point.',
      date: 'March 2025',
    },
    {
      quote: 'A book is a mirror. If a fool looks in, you can\'t expect a genius to look out.',
      body: 'Lichtenberg wrote this three hundred years ago and it remains the best thing ever said about reading. Books don\'t teach us — they reflect what we bring to them. The insights you find in a book are the insights you were ready to receive. This is why rereading great books is so rewarding: you are a different reader each time.',
      date: 'June 2025',
    },
  ],
};


/* ═══ APP ═══ */
const App = (() => {

  /* ── State ── */
  let currentPage = 'home';
  let currentArticleId = null;
  let searchOpen = false;
  let searchIndex = -1;
  let toastTimer = null;
  let cursorX = 0, cursorY = 0;
  let outerX = 0, outerY = 0;
  const blogFilter = { active: 'all' };

  /* ── Init ── */
  function init() {
    setupCursor();
    setupNav();
    setupSearch();
    setupTheme();
    setupScrollEffects();
    setupReveal();
    renderHomePostList();
    bindGlobalClicks();
    bindHamburger();
    bindNewsletter();
    bindContactForm();
    animateCounters();
  }

  /* ── Cursor ── */
  function setupCursor() {
    const outer = document.getElementById('cursor-outer');
    const inner = document.getElementById('cursor-inner');
    if (!outer || !inner) return;

    document.addEventListener('mousemove', (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
      inner.style.left = cursorX + 'px';
      inner.style.top = cursorY + 'px';
    });

    (function animateCursor() {
      outerX += (cursorX - outerX) * 0.12;
      outerY += (cursorY - outerY) * 0.12;
      outer.style.left = outerX + 'px';
      outer.style.top = outerY + 'px';
      requestAnimationFrame(animateCursor);
    })();

    document.addEventListener('mouseover', (e) => {
      const el = e.target.closest('a, button, [data-nav], .card-hover, .blog-card, .book-card, .snippet-card, .cat-card, .post-item, .feat-small, .feat-main, .filter-btn, .filter-tab');
      document.body.classList.toggle('cursor-hover', !!el);
    });

    document.addEventListener('mousedown', () => {
      outer.style.transform = 'translate(-50%, -50%) scale(0.85)';
    });
    document.addEventListener('mouseup', () => {
      outer.style.transform = '';
    });
  }

  /* ── Navigation ── */
  function setupNav() {
    window.addEventListener('scroll', () => {
      const nav = document.getElementById('main-nav');
      nav.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  /* ── Global Click Delegation ── */
  function bindGlobalClicks() {
    document.addEventListener('click', (e) => {
      const navEl = e.target.closest('[data-nav]');
      if (navEl) {
        const target = navEl.getAttribute('data-nav');
        const id = navEl.getAttribute('data-id');
        e.preventDefault();
        navigate(target, id);
        return;
      }
    });
  }

  /* ── Navigation ── */
  function navigate(page, id = null) {
    const currentEl = document.getElementById('page-' + currentPage);
    const nextEl = document.getElementById('page-' + page);
    if (!nextEl) return;

    closeMobileDrawer();

    document.querySelectorAll('.nav-link').forEach(a => {
      a.classList.toggle('active', a.getAttribute('data-nav') === page);
    });

    if (currentEl && currentEl !== nextEl) {
      currentEl.classList.add('page-transition-out');
      setTimeout(() => {
        currentEl.classList.remove('active', 'page-transition-out');
        nextEl.classList.add('active', 'page-transition-in');
        setTimeout(() => nextEl.classList.remove('page-transition-in'), 400);
      }, 200);
    } else {
      nextEl.classList.add('active');
    }

    currentPage = page;
    window.scrollTo({ top: 0, behavior: 'instant' });

    switch (page) {
      case 'blog':
        renderBlog('all');
        break;
      case 'article':
        renderArticle(id);
        break;
      case 'books':
        renderBooks();
        break;
      case 'book-detail':
        renderBookDetail(id);
        break;
      case 'coding':
        renderSnippets('');
        break;
      case 'philosophy':
        renderPhilosophy();
        break;
    }

    setTimeout(setupReveal, 100);
  }

  /* ── Hamburger ── */
  function bindHamburger() {
    const btn = document.getElementById('hamburger');
    const backdrop = document.getElementById('drawer-backdrop');
    if (btn) {
      btn.addEventListener('click', () => {
        const drawer = document.getElementById('mobile-drawer');
        const isOpen = drawer.classList.contains('open');
        if (isOpen) {
          closeMobileDrawer();
        } else {
          drawer.classList.add('open');
          backdrop.classList.add('visible');
          btn.classList.add('open');
        }
      });
    }
    if (backdrop) {
      backdrop.addEventListener('click', closeMobileDrawer);
    }
    document.querySelectorAll('.drawer-link').forEach(a => {
      a.addEventListener('click', () => setTimeout(closeMobileDrawer, 150));
    });
  }

  function closeMobileDrawer() {
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    const btn = document.getElementById('hamburger');
    if (drawer) drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('visible');
    if (btn) btn.classList.remove('open');
  }

  /* ── Search ── */
  function setupSearch() {
    const trigger = document.getElementById('search-trigger');
    const modal = document.getElementById('search-modal');
    const backdrop = document.getElementById('search-backdrop');
    const field = document.getElementById('search-field');

    if (trigger) trigger.addEventListener('click', openSearch);
    if (backdrop) backdrop.addEventListener('click', closeSearch);

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchOpen ? closeSearch() : openSearch();
      }
      if (e.key === 'Escape' && searchOpen) closeSearch();
      if (searchOpen) {
        const items = document.querySelectorAll('.search-result-item');
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          searchIndex = Math.min(searchIndex + 1, items.length - 1);
          updateSearchFocus(items);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          searchIndex = Math.max(searchIndex - 1, 0);
          updateSearchFocus(items);
        } else if (e.key === 'Enter' && searchIndex >= 0 && items[searchIndex]) {
          items[searchIndex].click();
        }
      }
    });

    if (field) {
      field.addEventListener('input', (e) => {
        searchIndex = -1;
        renderSearchResults(e.target.value);
      });
    }
  }

  function openSearch() {
    const modal = document.getElementById('search-modal');
    const field = document.getElementById('search-field');
    modal.classList.add('open');
    searchOpen = true;
    searchIndex = -1;
    if (field) {
      field.value = '';
      setTimeout(() => field.focus(), 50);
    }
    renderSearchResults('');
  }

  function closeSearch() {
    const modal = document.getElementById('search-modal');
    modal.classList.remove('open');
    searchOpen = false;
    searchIndex = -1;
  }

  function updateSearchFocus(items) {
    items.forEach((item, i) => item.classList.toggle('focused', i === searchIndex));
    if (items[searchIndex]) {
      items[searchIndex].scrollIntoView({ block: 'nearest' });
    }
  }

  function renderSearchResults(query) {
    const container = document.getElementById('search-results');
    if (!container) return;

    const q = query.toLowerCase().trim();
    const results = [];

    DATA.posts.forEach(p => {
      if (!q || p.title.toLowerCase().includes(q) || p.catLabel.toLowerCase().includes(q)) {
        results.push({ cat: p.catLabel, title: p.title, action: () => { closeSearch(); navigate('article', p.id); } });
      }
    });
    DATA.books.forEach(b => {
      if (!q || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)) {
        results.push({ cat: 'Book', title: `${b.title} — ${b.author}`, action: () => { closeSearch(); navigate('book-detail', b.id); } });
      }
    });
    DATA.snippets.forEach(s => {
      if (!q || s.title.toLowerCase().includes(q) || s.tags.some(t => t.includes(q))) {
        results.push({ cat: 'Code Snippet', title: s.title, action: () => { closeSearch(); navigate('coding'); } });
      }
    });

    const display = q ? results : results.slice(0, 6);
    if (!display.length) {
      container.innerHTML = `<div style="padding:2rem;text-align:center;font-family:var(--font-mono);font-size:0.82rem;color:var(--text-3)">No results for "${query}"</div>`;
      return;
    }

    container.innerHTML = display.map((item, i) => `
      <div class="search-result-item" data-search-i="${i}">
        <span class="sri-cat">${item.cat}</span>
        <span class="sri-title">${item.title}</span>
      </div>
    `).join('');

    container.querySelectorAll('.search-result-item').forEach((el, i) => {
      el.addEventListener('click', () => display[i].action());
    });
  }

  /* ── Theme ── */
  function setupTheme() {
    const btn = document.getElementById('theme-toggle');
    const saved = localStorage.getItem('logicity-theme') || 'dark';
    setTheme(saved);

    if (btn) {
      btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    }
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('logicity-theme', theme);
    const moon = document.querySelector('.icon-moon');
    const sun = document.querySelector('.icon-sun');
    if (moon) moon.style.display = theme === 'dark' ? '' : 'none';
    if (sun) sun.style.display = theme === 'dark' ? 'none' : '';
  }

  /* ── Scroll Effects ── */
  function setupScrollEffects() {
    window.addEventListener('scroll', () => {
      const fill = document.getElementById('reading-fill');
      if (fill) {
        const total = document.body.scrollHeight - window.innerHeight;
        const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
        fill.style.width = Math.min(100, pct) + '%';
      }
    });
  }

  /* ── Scroll Reveal ── */
  function setupReveal() {
    const els = document.querySelectorAll('.reveal:not(.visible)');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => obs.observe(el));
  }

  /* ── Counter Animation ── */
  function animateCounters() {
    const els = document.querySelectorAll('.stat-num[data-count]');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const target = parseInt(e.target.getAttribute('data-count'));
          countUp(e.target, target);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    els.forEach(el => obs.observe(el));
  }

  function countUp(el, target) {
    const duration = 1400;
    const start = performance.now();
    (function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    })(start);
  }

  /* ── Home Post List ── */
  function renderHomePostList() {
    const container = document.getElementById('home-post-list');
    if (!container) return;
    const posts = DATA.posts.slice(0, 4);
    container.innerHTML = posts.map(p => `
      <div class="post-item reveal" data-nav="article" data-id="${p.id}">
        <div>
          <div class="pi-cat">${p.catLabel}</div>
          <div class="pi-title">${p.title}</div>
          <div class="pi-excerpt">${p.excerpt}</div>
          <div class="pi-meta">${p.date} · ${p.time}</div>
        </div>
        <div class="pi-thumb" style="background:${p.bg}">${p.emoji}</div>
      </div>
    `).join('');
  }

  /* ── Blog ── */
  function renderBlog(cat) {
    const grid = document.getElementById('blog-grid');
    if (!grid) return;

    const posts = cat === 'all' ? DATA.posts : DATA.posts.filter(p => p.cat === cat);
    blogFilter.active = cat;

    grid.style.opacity = '0';
    grid.style.transform = 'translateY(12px)';

    setTimeout(() => {
      grid.innerHTML = posts.map(p => `
        <div class="blog-card reveal" data-nav="article" data-id="${p.id}">
          <div class="blog-card-img" style="background:${p.bg}">${p.emoji}</div>
          <div class="blog-card-body">
            <div class="tag-pill">${p.catLabel}</div>
            <div class="blog-card-title">${p.title}</div>
            <div class="blog-card-excerpt">${p.excerpt}</div>
            <div class="blog-card-meta"><span>${p.date}</span><span>·</span><span>${p.time}</span></div>
          </div>
        </div>
      `).join('');

      grid.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      grid.style.opacity = '1';
      grid.style.transform = '';

      setupReveal();
    }, 150);

    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-cat') === cat);
    });
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (btn) {
      const cat = btn.getAttribute('data-cat');
      if (cat) renderBlog(cat);
    }
  });

  /* ── Article ── */
  function renderArticle(id) {
    const article = DATA.articles[id];
    if (!article) return;
    const container = document.getElementById('article-content');
    if (!container) return;

    const backBtn = document.getElementById('article-back');
    if (backBtn) {
      backBtn.onclick = () => navigate('blog');
    }

    container.innerHTML = `
      <div class="article-header">
        <div class="article-cat">${article.cat}</div>
        <h1 class="article-title">${article.title}</h1>
        <div class="article-meta">
          <span class="author">Vikash</span>
          <span class="dot">·</span>
          <span>${article.date}</span>
          <span class="dot">·</span>
          <span>${article.time}</span>
        </div>
      </div>

      <div class="article-divider"></div>

      <div class="article-toc">
        <div class="toc-heading">Table of Contents</div>
        <ol class="toc-list">
          ${article.toc.map((t, i) => `<li><a href="#s${i}">${t}</a></li>`).join('')}
        </ol>
      </div>

      <div class="prose">${article.content}</div>

      <div class="share-bar">
        <span class="share-label">Share</span>
        <button class="share-btn" onclick="App.copyLink()">Copy Link</button>
        <button class="share-btn" onclick="App.toast('Sharing on Twitter…')">Twitter</button>
        <button class="share-btn" onclick="App.toast('Sharing on LinkedIn…')">LinkedIn</button>
      </div>
    `;
  }

  /* ── Books ── */
  function renderBooks() {
    const grid = document.getElementById('books-grid');
    if (!grid) return;
    grid.innerHTML = DATA.books.map(b => `
      <div class="book-card reveal" data-nav="book-detail" data-id="${b.id}">
        <div class="book-cover" style="background:${b.img ? 'none' : b.bg}; overflow:hidden;">
          ${b.img
            ? `<img src="${b.img}" alt="${b.title}" style="width:100%;height:100%;object-fit:cover;border-radius:10px;display:block;">`
            : b.emoji
          }
        </div>
        <div class="book-title">${b.title}</div>
        <div class="book-author">${b.author}</div>
        <div class="book-stars">${'★'.repeat(b.rating)}${'☆'.repeat(5 - b.rating)}</div>
      </div>
    `).join('');
    setTimeout(setupReveal, 50);
  }

  /* ── Book Detail ── */
  function renderBookDetail(id) {
    const book = DATA.books.find(b => b.id === id);
    if (!book) return;
    const container = document.getElementById('book-detail-content');
    if (!container) return;

    /* ── Hindi badge shown for Godan ── */
    const langBadge = book.hindiContent
      ? `<span class="tag-pill" style="background:rgba(139,69,19,0.18);color:#C4905A;border-color:rgba(139,69,19,0.3);margin-left:0.5rem;">हिंदी</span>`
      : '';

    container.innerHTML = `
      <div class="book-detail-header">
        <div class="book-detail-cover" style="background:${book.img ? 'none' : book.bg}; overflow:hidden;">
          ${book.img
            ? `<img src="${book.img}" alt="${book.title}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;display:block;">`
            : book.emoji
          }
        </div>
        <div class="book-detail-info">
          <div style="display:flex;align-items:center;flex-wrap:wrap;gap:4px;">
            <div class="tag-pill">Book Summary</div>${langBadge}
          </div>
          <h1>${book.title}</h1>
          <div class="book-author">${book.author}</div>
          <div class="book-stars">${'★'.repeat(book.rating)}${'☆'.repeat(5 - book.rating)}</div>
          <p>${book.summary}</p>
        </div>
      </div>

      ${book.hindiContent
        ? `<div class="prose" style="margin-bottom:2rem;">${book.hindiContent}</div>`
        : ''
      }

      <div class="lessons-block">
        <h3>${book.hindiContent ? 'मुख्य सीख / Key Lessons' : 'Key Lessons'}</h3>
        ${book.lessons.map((l, i) => `
          <div class="lesson-row">
            <span class="lesson-n">0${i + 1}</span>
            <span>${l}</span>
          </div>
        `).join('')}
      </div>

      <div style="margin-top:2.5rem">
        <div class="section-eyebrow" style="margin-bottom:1rem">${book.hindiContent ? 'यादगार पंक्तियाँ' : 'Favourite Quotes'}</div>
        ${book.quotes.map(q => `<div class="quote-block">${q}</div>`).join('')}
      </div>
    `;
  }

  /* ── Snippets ── */
  function renderSnippets(query) {
    const grid = document.getElementById('snippet-grid');
    if (!grid) return;

    const q = query.toLowerCase();
    const data = q
      ? DATA.snippets.filter(s =>
          s.title.toLowerCase().includes(q) ||
          s.lang.toLowerCase().includes(q) ||
          s.tags.some(t => t.toLowerCase().includes(q))
        )
      : DATA.snippets;

    grid.innerHTML = data.map(s => `
      <div class="snippet-card" data-snippet-id="${s.id}">
        <div class="snippet-head">
          <span class="snippet-lang">${s.lang}</span>
          <span class="snippet-title">${s.title}</span>
        </div>
        <pre class="snippet-body">${escapeHtml(s.code)}</pre>
        <div class="snippet-foot">
          <div class="tags-row">${s.tags.map(t => `<span class="s-tag">#${t}</span>`).join('')}</div>
          <span class="copy-hint">Click to copy</span>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.snippet-card').forEach(card => {
      card.addEventListener('click', () => {
        const sid = card.getAttribute('data-snippet-id');
        const snippet = DATA.snippets.find(s => s.id === sid);
        if (snippet) {
          if (navigator.clipboard) {
            navigator.clipboard.writeText(snippet.code)
              .then(() => toast('Code copied to clipboard ✓'))
              .catch(() => toast('Code copied ✓'));
          } else {
            toast('Code copied ✓');
          }
        }
      });
    });

    const input = document.getElementById('code-search');
    if (input && !input._bound) {
      input.addEventListener('input', (e) => renderSnippets(e.target.value));
      input._bound = true;
    }
  }

  /* ── Philosophy ── */
  function renderPhilosophy() {
    const list = document.getElementById('phil-list');
    if (!list) return;
    list.innerHTML = DATA.philosophy.map(p => `
      <div class="phil-entry reveal">
        <div class="phil-quote">${p.quote}</div>
        <div class="phil-body">${p.body}</div>
        <div class="phil-date">${p.date}</div>
      </div>
    `).join('');
    setTimeout(setupReveal, 50);
  }

  /* ── Newsletter ── */
  function bindNewsletter() {
    const btn = document.getElementById('nl-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const input = document.getElementById('nl-email');
        const email = input ? input.value.trim() : '';
        if (email && email.includes('@') && email.includes('.')) {
          toast('Subscribed! Welcome aboard 🎉');
          if (input) input.value = '';
        } else {
          toast('Please enter a valid email address');
        }
      });
    }
    const input = document.getElementById('nl-email');
    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') btn.click();
      });
    }
  }

  /* ── Contact ── */
  function bindContactForm() {
    const btn = document.getElementById('contact-submit');
    if (btn) {
      btn.addEventListener('click', () => {
        const name = (document.getElementById('c-name') || {}).value || '';
        const email = (document.getElementById('c-email') || {}).value || '';
        const msg = (document.getElementById('c-message') || {}).value || '';
        if (!name.trim()) { toast('Vikash Raj'); return; }
        if (!email.trim() || !email.includes('@')) { toast('varunraj9104@gmail.com'); return; }
        if (!msg.trim()) { toast('Please write a message'); return; }
        toast('Message sent! I\'ll get back to you soon ✓');
        ['c-name', 'c-email', 'c-subject', 'c-message'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.value = '';
        });
      });
    }
  }

  /* ── Toast ── */
  function toast(msg, duration = 3500) {
    const el = document.getElementById('toast');
    if (!el) return;
    clearTimeout(toastTimer);
    el.textContent = msg;
    el.classList.add('show');
    toastTimer = setTimeout(() => el.classList.remove('show'), duration);
  }

  /* ── Helpers ── */
  function copyLink() {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => toast('Link copied ✓'));
    } else {
      toast('Link copied ✓');
    }
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  /* ── Public API ── */
  return { init, navigate, toast, copyLink };

})();

/* ═══ Bootstrap ═══ */
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
