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

  - type দিয়ে যেকোনো সিঙ্গেল টাইপ ডিকলার করা গেলেও interface দিয়ে তা করা যায় না। interface এর গঠন হচ্ছে একটা object, তাই এটা অবজেক্ট টাইপ ডিফাইন করতে বেশি ব্যবহার হয়।
  অর্থাৎ type Union type সাপোর্ট করলেও, interface union type সাপোর্ট করে 
    
  - একই নামে interface ডিকলার করলে তা অটো মার্জ করে নিয়ে একটা টাইপ করে নেয়। type ব্যবহার করে একই নামে টাইপ ডিকলার করলে তা ইরোর দেয়। 
