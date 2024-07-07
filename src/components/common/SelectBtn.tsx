import { useState } from "react";


const SelectBtn = ({ name, value, inputGrp, register }: any) => {

    const [checked, setChecked] = useState(false);

    return (
        <label className={checked ? 'selectBtn-checked' : "selectBtn"}>
            <input type="checkbox" value={value} {...register(inputGrp)} onChange={() => setChecked((prevState) => !prevState)} />
            <span>{name}</span>
        </label>
    )

}

export default SelectBtn;