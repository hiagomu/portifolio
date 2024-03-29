import styles from './styles'
import stacks from '../../../utils/stacks.json'
import React, { useState } from 'react'
import {
    MdVerified as VerifiedIcon
} from 'react-icons/md'

const Skills: React.FC = () => {

    const [stackIndex, setStackIndex] = useState(0)

    return (
        <styles.skills id='skills'>
            <h2>Habilidades</h2>
            <styles.stackWrapper>
                <styles.selectStack>
                    {
                        stacks.map((stack, index) =>                             
                            <styles.selectStackButton
                                onClick={() => setStackIndex(index)}
                                active={index === stackIndex}
                            >
                                {stack.name}
                            </styles.selectStackButton>
                        )
                    }
                </styles.selectStack>
                <styles.skillsBox>
                    <h3>
                        {stacks[stackIndex].name}
                    </h3>
                    <ul>
                        {
                            stacks[stackIndex].tools.map(tool => 
                                <li>
                                    {tool}
                                    <VerifiedIcon className="verified"/>
                                </li>
                            )
                        }
                    </ul>
                </styles.skillsBox>
            </styles.stackWrapper>
        </styles.skills>
    )
}

export default Skills