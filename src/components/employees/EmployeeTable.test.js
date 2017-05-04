import React from 'react';
import EmployeeTable from './EmployeeTable';
import renderer from 'react-test-renderer';


describe('Employee Table Component: ', function () {


    it('should instantiate the Employee Table', function () {


        const employees = [{username:'fflintstone',
                          'email':'fred.flintstone@slatequarry.com',
                          'firstName':'Fred',
                          'lastName':'Flintstone',
                          'admin':true
                         }]



        const component = renderer.create(
                <EmployeeTable employees={employees}/>
        );

        let stringVal = JSON.stringify(component);
        expect(stringVal).toMatch(/table/);
        expect(stringVal).toMatch(/Flintstone/);


  });

});