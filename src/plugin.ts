export function addAngularUnitTestPlugin(on: (action: string, fn: any) => void) {
    on('file:preprocessor', require('./cy-ts-preprocessor'));
}