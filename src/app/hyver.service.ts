import { Injectable } from '@angular/core';
import { Hyver } from './hyver';
import { HYVERS } from './mock-hyvers';

@Injectable()
export class HyverService {

    constructor() {
    }

    /**
     *  Get hyvers from mock data
     * @returns {Hyver[]}
     */
    getHyvers(): Hyver[] {
        return HYVERS;
    }

    /**
     * Get hyvers as promise
     * @returns {Promise<Hyver[]>}
     */
    getHyversAsPromise(): Promise<Hyver[]> {
        return Promise.resolve(HYVERS);
    }

    getHyversSlowly(): Promise<Hyver[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHyvers()), 20000);
        });
    }

}
