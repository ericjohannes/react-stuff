import '@testing-library/jest-dom'

import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'

import LoginForm from "../LoginForm"


test('checks if submit does desired behavior', () => {

    render(<LoginForm />)

    // set text values of these boxes
    fireEvent.change(screen.getAllByRole('textbox')[0], {target: {value: 'eric'}})
    fireEvent.change(screen.getAllByRole('textbox')[1], {target: {value: 'p@ssw0rd'}})
    
    // click submit
    fireEvent.click(screen.getByText('Submit'))

    // check values
    expect(screen.getAllByRole('heading', {level: 6}))[0].toHaveTextContent('eric')
    expect(screen.getAllByRole('heading', {level: 6}))[1].toHaveTextContent('p@ssw0rd')

});