# Customer Support Zone

A clean, responsive React application for managing and resolving customer support tickets efficiently.

## Features

- **Dynamic Ticket Board**: View customer tickets mapping elegantly into a 2-column responsive layout.
- **Task Assignment Logic**: Assign "Open" tickets directly into an "In-Progress" Task Sidebar by clicking.
- **Workflow Triggers**: Complete Tasks and watch them safely migrate into the "Resolved Task" section.
- **Live Counter Banners**: Dynamic UI components parsing lengths of arrays to provide total overviews.
- **Seamless Notifications**: Uses React-Toastify alerts for smooth interface interactions.

## Interview Questions

### 1. What is JSX, and why is it used?
**Answer:**
JSX (JavaScript XML) হলো রিয়্যাক্টের একটি সিনট্যাক্স এক্সটেনশন যা আমাদের জাভাস্ক্রিপ্ট ফাইলের ভিতরে সরাসরি HTML-এর মতো কোড লিখতে দেয়। এটি রিয়্যাক্টে UI কম্পোনেন্ট তৈরি করা সহজ এবং বোধগম্য করে তোলে, কারণ আমরা সরাসরি বুঝতে পারি যে আমাদের UI দেখতে কেমন হবে।

### 2. What is the difference between State and Props?
**Answer:**
- **State**: এটি একটি কম্পোনেন্টের নিজস্ব ডেটা স্টোর। এটি পরিবর্তনযোগ্য (mutable) এবং একটি কম্পোনেন্টের ভেতরেই পরিচালিত হয়। স্টেট পরিবর্তন হলে কম্পোনেন্টটি রি-রেন্ডার হয়।
- **Props**: প্রপস (Properties) হলো এক কম্পোনেন্ট থেকে অন্য কম্পোনেন্টে ডেটা পাঠানোর মাধ্যম। এটি অপরিবর্তনযোগ্য (immutable) বা read-only, অর্থাৎ যে কম্পোনেন্ট এটি গ্রহণ করে, সে এটি পরিবর্তন করতে পারে না।

### 3. What is the useState hook, and how does it work?
**Answer:**
`useState` হলো একটি রিয়্যাক্ট হুক যা ফাংশনাল কম্পোনেন্টগুলোতে স্টেট যোগ করতে ব্যবহৃত হয়। এটি দুটি জিনিস রিটার্ন করে: একটি কারেন্ট স্টেট ভ্যালু এবং অন্যটি একটি ফাংশন যা ওই স্টেটটিকে আপডেট করতে সাহায্য করে। উদাহরণস্বরূপ: `const [count, setCount] = useState(0);`

### 4. How can you share state between components in React?
**Answer:**
রিয়্যাক্টে স্টেট শেয়ার করার কয়েকটি সাধারণ উপায় রয়েছে:
1. **Lifting State Up**: স্টেটকে একটি কমন প্যারেন্ট কম্পোনেন্টে রাখা হয় এবং প্রপসের মাধ্যমে চাইল্ড কম্পোনেন্টগুলোতে পাঠানো হয়।
2. **Context API**: প্রপ-ড্রিলিং এড়াতে গ্লোবাল স্টেট হিসেবে ডেটা সরবরাহ করতে ব্যবহৃত হয়।
3. **State Management Libraries**: রেডক্স (Redux) বা জুস্টান্ড (Zustand)-এর মতো লাইব্রেরি ব্যবহার করে বড় অ্যাপ্লিকেশনে স্টেট ম্যানেজ করা হয়।

### 5. How is event handling done in React?
**Answer:**
রিয়্যাক্টে ইভেন্ট হ্যান্ডলিং সাধারণ DOM ইভেন্টের মতোই, তবে এর কিছু পার্থক্য রয়েছে। রিয়্যাক্ট ইভেন্টগুলোর নাম camelCase-এ লেখা হয় (যেমন: `onClick`, `onChange` ইত্যাদি) এবং এগুলোকে স্ট্রিংয়ের পরিবর্তে একটি ফাংশন হিসেবে পাস করতে হয়। উদাহরণ: `<button onClick={handleClick}>Click Me</button>`

---
*Developed carefully as a human-readable React implementation showcasing modern patterns architecture.*
