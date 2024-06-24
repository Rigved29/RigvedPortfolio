
interface secPropTypes {
    classes?: string;
    children: React.ReactNode
}

const SectionWrapper = ({ classes = '', children }: secPropTypes) => {

    return (
        <section className={`secWrapper ${classes}`}>
            {children}
        </section>
    )
}

export default SectionWrapper;