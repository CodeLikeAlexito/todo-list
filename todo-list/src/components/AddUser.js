import React, {useState} from "react";
import Button from '.././components/Button';
import ErrorModal from "./ErrorModal";

const initialUserInput = {
    'user-name': "",
    'age': 18
};

const AddUser = ( {onSubmit} ) => {

    const [userInput, setUserInput] = useState(initialUserInput);
    const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
        if(validateForm()){
            console.log('valid form');
            onSubmit(userInput);
            setUserInput(initialUserInput);
        } else {
            console.log('invalid form');
            console.log(errors);
            setIsErrorModalVisible(true);
        }
    }

    const inputChangeHandler = (input, value) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: value,
            };
        });
    };

    const [errors, setErrors] = useState({
        name: '',
        age: '',
    });

    const validateForm = () => {
        const user = userInput['user-name'];
        const age = userInput['age'];
        let valid = true;
        const newErrors = {
          name: '',
          age: '',
        };
    
        if (!user.trim()) {
          newErrors.name = 'Name is required';
          valid = false;
        }
    
        if (!age) {
          newErrors.age = 'Age is required';
          valid = false;
        }
    
        setErrors(newErrors);
        return valid;
      };

    return (
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <div>
                    <div>
                        <label htmlFor="user-name">User: </label>
                        <input
                            onChange={(event) => 
                                inputChangeHandler('user-name', event.target.value)
                            }
                            value={userInput['user-name']}
                            id="user-name" />
                    </div>
                <div>
                    <label htmlFor="age">Age(Years): </label>
                    <input
                        onChange={(event) => 
                            inputChangeHandler('age', event.target.value)
                        }
                        value={userInput['age']}
                        type="number"
                        id="age"
                    />
                </div>
                <div>
                    <Button onClick={submitHandler}/>
                </div>
            </div>
            </form>
            {isErrorModalVisible && (
                <ErrorModal
                    onClose={() => setIsErrorModalVisible(false)} 
                />
            )}
        </React.Fragment>
    )
}

export default AddUser;