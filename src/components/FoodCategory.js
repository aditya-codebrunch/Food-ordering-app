import { useState } from "react";

const FoodCategory = (props) => {
    const { category, itemList, showItems, setExpandedIndex, index } = props;
    const handleClick = ()=>{
        if(!showItems){
            setExpandedIndex(index);
        }else{
            setExpandedIndex(-1);
        }
    }
    return (
        <div className="w-full flex flex-col flex-nowrap justify-start mb-2">
            <div onClick={handleClick} className="cursor-pointer w-full flex flex-row flex-nowrap justify-between p-[1%] bg-slate-200 border border-b-slate-200">
                <h2 className="font-semibold">{category + ' (' + itemList.length + ')'}</h2>
                <span className="font-semibold" >{!showItems ? '˅' : '^'}</span>
            </div>
            {showItems &&
                <ul className="w-full text-center px-[10%] py-[1%]">
                    {itemList.map((item)=>{
                        return(<li className="w-full flex flex-row flex-nowrap justify-between p-[1%] bg-slate-300 border border-b-slate-300" key={item.id}><span className="p-[1%]">{item.itemName + ' Rs '+item.cost}</span><button className="bg-slate-100 cursor-pointer text-black p-[1%]">Add Item</button></li>)
                    })}
                </ul>}

        </div>

    )

}

export default FoodCategory;