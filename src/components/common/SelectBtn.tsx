import { useState, useEffect, memo } from "react";


function SelectBtn({ name, value, inputGrp, register, interestedIn }: any) {

    const [checked, setChecked] = useState(false);


    useEffect(() => {
        const isPresent = interestedIn?.includes(value);
        if (isPresent) {
            setChecked(true);
        } else {
            setChecked(false);
        }
    }, [interestedIn])

    // onChange={() => setChecked((prevState) => !prevState)}

    return (
        <label className={checked ? 'selectBtn-checked' : "selectBtn"}>
            <input type="checkbox" value={value} {...register(inputGrp)} />
            <span>{name}</span>
        </label>
    )

}

export default SelectBtn;