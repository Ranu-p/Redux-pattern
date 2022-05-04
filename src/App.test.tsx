import React from 'react';
import Enzyme, { shallow,mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import LoginComponent from "./components/login";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import RegisteredComponent from "./components/register";
Enzyme.configure({ adapter: new Adapter() });

 /**
 * test cases for unit test on login screen
 *  @author Virendra Yadav
 */

describe('Test case for unit testing of Login screen',() =>{
   const wrapper;
   wrapper = shallowWithBrowserRouter(<LoginComponent/>);
   // check email field exits
    it('check email or username fields exits',()=> {
      expect(wrapper.find('input[type="email"]').length).toEqual(1);
   });

   // check password  field exits
    it('check password fields exits',()=> {
      expect(wrapper.find('input[type="password"]').length).toEqual(1);
   });

   // check password  field exits
    it('check submit button exits',()=> {
      expect(wrapper.find('#submit-button').length).toEqual(5);
   });

   // check email field min and max length
    it('check email min and max length',()=> {
        expect(wrapper.find('input[type="email"]').prop('minLength')).toEqual(6);
        expect(wrapper.find('input[type="email"]').prop('maxLength')).toEqual(100);
    });

    // check email field min  length with wrong value
    // it('check email min length with wrong value',()=> {
    //   expect(wrapper.find('input[type="email"]').prop('minLength')).toEqual(8);
    // });

     // check email field  max length with wrong value
    // it('check email  max length with wrong value',()=> {
    //     expect(wrapper.find('input[type="email"]').prop('maxLength')).toEqual(200);
    // });
    // check password field min and max length
      it('check password min and max length',()=> {
          expect(wrapper.find('input[type="password"]').prop('minLength')).toEqual(8);
          expect(wrapper.find('input[type="password"]').prop('maxLength')).toEqual(32);
      });
      // check forgot password button
      // it('check Forgot Password button',()=> {
      //     expect(wrapper.find('#ForgotButton').length).toEqual(1);
      // });

      // check signup button
      it('check signup button',()=> {
          expect(wrapper.find('#signup').length).toEqual(1);
      });
    // check password field min  length with wrong value
    // it('check password min length with wrong value',()=> {
    //   expect(wrapper.find('input[type="password"]').prop('minLength')).toEqual(10);
    // });

     // check password field  max length with wrong value
    // it('check password  max length with wrong value',()=> {
    //     expect(wrapper.find('input[type="password"]').prop('maxLength')).toEqual(20);
    // });

     // check validate email and password fields
    it('check validate  email and password for right data',()=> {
        wrapper.find('input[type="email"]').simulate('change', {target: {name: 'username', value: 'virendra.synsoft@gmail.com'}});
        wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'Viru@7862'}});
        expect(wrapper.find('input[type="email"]').prop('value')).toEqual('virendra.synsoft@gmail.com',);
        expect(wrapper.find('input[type="password"]').prop('value')).toEqual('Viru@7862');
    });
 })

 // start test cases writing for registered screen

describe('Test case for unit testing of registered screen',() =>{
   const wrapper;
   wrapper = shallowWithBrowserRouter(<RegisteredComponent/>);
    // check first name field exits
    it('check first name  fields exits',()=> {
        expect(wrapper.find('input[id="First Name"]').length).toEqual(1);
    });

    // check first name  min and max length
    it('check first name  min and max length',()=> {
        expect(wrapper.find('input[id="First Name"]').prop('minLength')).toEqual(1);
        expect(wrapper.find('input[id="First Name"]').prop('maxLength')).toEqual(50);
    });

     // check last name field exits
     it('check last name  fields exits',()=> {
        expect(wrapper.find('input[id="Last Name"]').length).toEqual(1);
     });

      // check first name  min and max length
    it('check last name  min and max length',()=> {
        expect(wrapper.find('input[id="Last Name"]').prop('minLength')).toEqual(1);
        expect(wrapper.find('input[id="Last Name"]').prop('maxLength')).toEqual(50);
    });
      // check username field exits
     it('check username  fields exits',()=> {
        expect(wrapper.find('input[id="Username"]').length).toEqual(1);
     });

      // check first name  min and max length
    it('check username  min and max length',()=> {
        expect(wrapper.find('input[id="Username"]').prop('minLength')).toEqual(1);
        expect(wrapper.find('input[id="Username"]').prop('maxLength')).toEqual(50);
    });
    // check email field exits
    it('check email fields exits',()=> {
        expect(wrapper.find('input[id="Email"]').length).toEqual(1);
    });
     // check email field min and max length
    it('check email min and max length',()=> {
        expect(wrapper.find('input[id="Email"]').prop('minLength')).toEqual(6);
        expect(wrapper.find('input[id="Email"]').prop('maxLength')).toEqual(50);
    });

     // check Password field exits
     it('check Password  fields exits',()=> {
        expect(wrapper.find('input[id="Password"]').length).toEqual(1);
     });

      // check Password field min and max length
      it('check Password min and max length',()=> {
          expect(wrapper.find('input[id="Password"]').prop('minLength')).toEqual(8);
          expect(wrapper.find('input[id="Password"]').prop('maxLength')).toEqual(32);
      });

      // check Confirm Password field exits
     it('check Confirm Password  fields exits',()=> {
        expect(wrapper.find('input[id="Confirm Password"]').length).toEqual(1);
     });

     // check Confirm Password field min and max length
      it('check Confirm Password min and max length',()=> {
          expect(wrapper.find('input[id="Confirm Password"]').prop('minLength')).toEqual(8);
          expect(wrapper.find('input[id="Confirm Password"]').prop('maxLength')).toEqual(32);
      });
     // check term and condition check box
      it('check term and condition check box',()=> {
          expect(wrapper.find('input[id="termCondition"]').length).toEqual(1);
      });
      // check term and condition check box value
      it('check term and condition check box value',()=> {
          // expect(wrapper.find('input[id="termCondition"]').length).toEqual(1);
          expect(wrapper.find('input[id="termCondition"]').prop('checked')).toEqual(true);
      });
     // check submit button  exits
      it('check submit button exits',()=> {
        expect(wrapper.find('#submit').length).toEqual(5);
      });

    it('check variable and button',()=> {
      //  const fn = jest.fn();
      // const wrapper = mount( <BrowserRouter> <RegisteredComponent onClick={fn} /> </BrowserRouter>);
      // wrapper.find('button[name="submit"]').invoke('click').then(() => {});
      //  expect(wrapper.instance().onSubmit).toHaveBeenCalled()
      // expect(fn).toHaveBeenCalled();
    });

})


  function shallowWithBrowserRouter(component) {
    return mount( <BrowserRouter> {component} </BrowserRouter>);
  }
