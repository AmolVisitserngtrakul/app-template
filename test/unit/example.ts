/// <reference path="../../src/scripts/typings/app.d.ts" />

import Application from '../../src/scripts/core/application';

describe('Application', () => {

    it('should be initialized', () => {
        expect(Application.init('agencyApp', [])).not.toBeNull();
    });

}); 