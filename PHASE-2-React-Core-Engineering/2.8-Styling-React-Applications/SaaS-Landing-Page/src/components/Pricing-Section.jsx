

const prices =[
    {
        type: "Free",
        title: "از امکانات و ابزار ما بصورت رایگان استفاده کنید",
        description: "این پلن کاملا رایگان بوده و ابزار اصلی کار و مدیریت کسب و کار شما را فراهم میکند. می‌توانید از تمام این امکانات برای بهبود روند مدیریتی کسب و کار خویش استفاده کنید. ",
        price: "0$ per Month"
    },
        {
        type: "Pro",
        title: "با ابزار و انکانات پیشرفته‌ی ما بصورت حرفه‌ای کسب و کار خود را مدیریت کنید",
        description: "در این پلن ما ابزارها و امکانات حرفه‌ای را در اختیار شما قرار میدهیم که با آن‌ها به راحتی و حرفه‌ای می‌توانید کسب و کار خود را مدیریت کنید. ابزارهای خاصی که در وقت و انرژی شما تا 75 درصد صرفه جویی خواهد کرد.",
        price: "10$ per Month"
    },
        {
        type: "Enterprise",
        title: "این پلن انترپرایس است",
        description: "من خودم هم نمیدانم این چه نوع پلنی میتونه باشه.  اما این را می‌دانم که اگر شما امتحان کنید، حتما مزایای بسیار زیادی در بخش مدیریت زمان و انرژی کارکنان و کسب و کار برای شما خواهد داشت.",
        price: "11$ per Month"
    }
]
function PricingSection(){
    return(
        <div id="pricingSection" className="flex flex-col py-16 md:py-24 bg-gray-600 ">
            <div id="pricingSection-heder" className="text-white flex flex-col items-center" >
                <h1>پلن‌ها و قیمت‌ها</h1>
                <p>با انتخاب پلن مورد نظر خود،‌ همانطور که دوست دارید کسب و کار خود را مدیریت کنید</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    prices.map(
                        (price, index)=>(
                            
                                <div key={index} id="pricingSection-card" className="bg-gray-300 ">
                                    <div>
                                         {price.type}
                                    </div>
                                    <div>
                                         {price.title}
                                    </div>
                                    <div>
                                         {price.description}
                                    </div>
                                    <div>
                                         {price.price}
                                    </div>
                                </div>

                            

                        )
                    )
                }
            </div>
        </div>
    )
}
export default PricingSection;