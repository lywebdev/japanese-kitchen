import styles from './MealItemForm.module.css';
import Input from "../../UI/Input";

const MealItemForm = (props) => {
    return <form className={styles.form}>
        <Input
            label='Quantity'
            input={{
                id: props.id,
                type: 'number',
                min: '1',
                step: '1',
                defaultValue: '1'
            }}
        />
        <button>Add</button>
    </form>
}

export default MealItemForm;