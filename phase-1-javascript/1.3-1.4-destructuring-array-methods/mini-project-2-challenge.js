// =========================================================================
// مینی‌پروژه جدید 2: موتور سفارشات و تحلیل فروش
// هدف: تمرین مجدد map()، filter()، reduce()، find() و sort() با سناریوی متفاوت
// سطح: کمی چالش‌برانگیز‌تر
// =========================================================================

// 1. داده‌های نمونه: لیست سفارش‌های یک فروشگاه آنلاین
const orders = [
  { id: "ORD-1001", customer: "Niloofar", amount: 240, status: "paid", priority: "high", category: "Electronics" },
  { id: "ORD-1002", customer: "Arman", amount: 85, status: "pending", priority: "low", category: "Books" },
  { id: "ORD-1003", customer: "Sara", amount: 320, status: "paid", priority: "medium", category: "Home" },
  { id: "ORD-1004", customer: "Niloofar", amount: 320, status: "refunded", priority: "high", category: "Electronics" },
  { id: "ORD-1005", customer: "Ali", amount: 150, status: "paid", priority: "high", category: "Fashion" },
  { id: "ORD-1006", customer: "Sara", amount: 210, status: "paid", priority: "low", category: "Electronics" },
  { id: "ORD-1007", customer: "Arman", amount: 95, status: "pending", priority: "medium", category: "Books" }
];

// -------------------------------------------------------------------------
// وظیفه 1: فیلتر سفارش‌های پرداخت‌شده و ارزش بالا
// استفاده از: filter()
// مأموریت: فقط سفارش‌هایی را نگه دار که status === "paid" و amount >= 100 باشند.
// -------------------------------------------------------------------------
const premiumPaidOrders = orders.filter(order => {
  return (order.status === "paid", order.amount >= 100);
}
);

console.log("1. سفارش‌های پرداخت‌شده و ارزش بالا:", premiumPaidOrders);

// -------------------------------------------------------------------------
// وظیفه 2: ساخت فاکتورهای خلاصه برای سفارش‌های انتخاب‌شده
// استفاده از: map()
// مأموریت: از premiumPaidOrders یک آرایه‌ی جدید بساز که هر مورد شامل این‌ها باشد:
// { invoiceId, customer, totalAfterDiscount }
// نکته: برای سفارش‌های amount >= 200، 10% تخفیف بده؛ وگرنه 5% تخفیف.
// -------------------------------------------------------------------------
const invoices = premiumPaidOrders.map(order => {
let finalPrice;
//روش اول
finalPrice = order.amount >= 200 ? order.amount*0.9 : order.amount*0.95;
//روش دوم
// if(order.amount >= 200){
//   finalPrice = order.amount*0.9;
// }else{
//   finalPrice = order.amount*0.95;
// }

  return {invoiceId: order.id, customer: order.customer, totalAfterDiscount:finalPrice}
});

console.log("2. فاکتورهای خلاصه:", invoices);

// -------------------------------------------------------------------------
// وظیفه 3: محاسبه درآمد خالص مجموعه سفارش‌ها
// استفاده از: reduce()
// مأموریت: مجموع totalAfterDiscount همه‌ی فاکتورها را حساب کن.
// -------------------------------------------------------------------------
const totalRevenue = invoices.reduce((sum, invoice) => {
  return sum + invoice.totalAfterDiscount;
}, 0);

console.log("3. مجموع درآمد خالص:", totalRevenue);

// -------------------------------------------------------------------------
// وظیفه 4: پیدا کردن سفارش خاص
// استفاده از: find()
// مأموریت: اولین سفارشی را که id آن "ORD-1005" باشد پیدا کن.
// -------------------------------------------------------------------------
const targetOrder = orders.find(order => {
 return order.id = "ORD-1005";
});

console.log("4. سفارش پیدا‌شده (ORD-1005):", targetOrder);

// -------------------------------------------------------------------------
// وظیفه 5: مرتب‌سازی سفارش‌ها بر اساس مبلغ و اولویت
// استفاده از: sort()
// مأموریت: یک کپی از orders بساز و آن‌ها را به ترتیب نزولی بر اساس amount مرتب کن.
// اگر مبلغ‌ها برابر بودند، ابتدا سفارش‌های priority === "high" بیایند.
// نکته: حتماً از [...orders] استفاده کن تا آرایه اصلی دست نخورده بماند.
// -------------------------------------------------------------------------
const sortedOrders = [...orders].sort((a, b) => {
  const amountDifference = b.amount - a.amount;
  if (amountDifference !== 0){
    return amountDifference;
  }else{
    if (a.priority === 'high' && b.priority !== 'high') {
    return -1;
    }
    if(b.priority === 'high' && a.priority !== 'high') {
      return 1;
    }
    return 0;
  }
});

console.log("5. سفارش‌های مرتب‌شده:", sortedOrders);
