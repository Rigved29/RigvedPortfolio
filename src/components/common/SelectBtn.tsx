

const SelectBtn = ({ name, value, inputGrp, register }: any) => {

    return (
        <label className="selectBtn">
            <input type="checkbox" value={value} {...register(inputGrp)} />
            <span>{name}</span>
        </label>
    )

}

export default SelectBtn;