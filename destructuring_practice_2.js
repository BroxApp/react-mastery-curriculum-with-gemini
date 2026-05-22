const blogPost = {
  title: "آموزش ری‌اکت",
  author: {
    firstName: "رضا",
    lastName: "احمدی"
  },
  stats: {
    views: 1500,
    likes: 200
  }
};

// تمرین:
// ۱. title، lastName و likes را با یک خط Destructuring استخراج کنید.
// ۲. یک Arrow Function بنویسید که این ۳ مورد را گرفته و جمله خلاصه را برگرداند.
// ۳. نتیجه را در کنسول چاپ کنید.

const {title, author:{lastName},stats:{likes}}=blogPost;
const blogData = (title, lastName,likes)=>`I study ${title} and my last name is ${lastName} and I like ${likes}`;
console.log(blogData(title, lastName, likes));

