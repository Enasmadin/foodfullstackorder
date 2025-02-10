import MainHeading from "@/components/main-heading"
import Menu from "@/components/menu"





const bestSellers = [
    { id: "1", name: "Pizza", basePrice: 10, image: "/assets/images/pizza.png", description: "" },
    { id: "2", name: "Pizza", basePrice: 10, image: "/assets/images/pizza.png", description: "" },
    { id: "3", name: "Pizza", basePrice: 10, image: "/assets/images/pizza.png", description: "" },
    { id: "4", name: "Pizza", basePrice: 10, image: "/assets/images/pizza.png", description: "" },
    { id: "5", name: "Pizza", basePrice: 10, image: "/assets/images/pizza.png", description: "" },
]

const BestSellers = () => {
    return (
        <section>
            <div className="container">
                <div className="text-center mb-4">
                    <MainHeading subTitle={"Checkout"} title={"Our Best Seller"} />
                </div>
                <Menu items={bestSellers} />
            </div>
        </section>
    )
}

export default BestSellers