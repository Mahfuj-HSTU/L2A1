1. Difference betwwen type and interface

- interface এ extends ব্যাবহার করে টাইপ বাড়ানো যায়। এর ফলে যাকে এক্সটেন্ড করা হয় তার প্রোপার্টি গুলাও যে এক্সটন্ড করে সে পেয়ে যায়।
  যেমনঃ
  interface A {
  x:number
  }
  interface B extends A {
  y: number;
  }
  এখানে B অটোমেটিক্যালি A এর সব প্রপার্টি পেয়ে যাবে।

  -
