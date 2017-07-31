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
            setTimeout(() => resolve(this.getHyvers()), 2000);
        });
    }

    getHyver(id: number): Promise<Hyver> {
        return this.getHyversAsPromise()
            .then(hyvers => hyvers.find(
                hyver => hyver.id === id
            ));
    }
}
