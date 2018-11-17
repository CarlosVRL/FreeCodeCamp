describe('Convert Celsius to Fahrenheit', function() {
    it('should return a number', () => {
        var res = convert_celsius_to_fahrenheit.api();
        expect(res).toEqual(jasmine.any(Number));
    });

    it('should convert -30 to -22', () => {
        var res = convert_celsius_to_fahrenheit.api(-30);
        expect(res).toEqual(-22);
    });
});
