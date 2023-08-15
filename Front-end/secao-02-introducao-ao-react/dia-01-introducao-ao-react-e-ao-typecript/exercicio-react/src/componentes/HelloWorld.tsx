import { calculateAge } from "../utils/age";
import ModuleDetails from "./ModuleDetails";
import Title from "./Title";

function HelloWorld() {
    const name = 'Thiago Silva';
    const birth = '12/02/2000';
    const age = calculateAge(birth);
    return (
        <div>
            <Title />
            <ModuleDetails />
            <p>{name}</p>
            <p>{`Age ${age}`}</p>
        </div>
    );
}

export default HelloWorld;