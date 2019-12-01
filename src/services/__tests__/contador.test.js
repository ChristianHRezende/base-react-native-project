import { add, getCount } from "../contador"

it('should add to count', () => {
    add();
    expect(getCount()).toBe(1);
})
