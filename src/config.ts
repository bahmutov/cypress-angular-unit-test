export class StyleOptions {

    /**
     * Creates <link href="..." /> element for each stylesheet
     * @alias stylesheet
     */
    stylesheets?: string[];

    /**
     * Creates <link href="..." /> element for each stylesheet
     * @alias stylesheets
     */
    stylesheet?: string;

    /**
     * Creates <style>...</style> element and inserts given CSS.
     * @alias styles
     */
    style?: string;

    /**
     * Creates <style>...</style> element for each given CSS text.
     * @alias style
     */
    styles?: string[];

    /**
     * Loads each file and creates a <style>...</style> element
     * with the loaded CSS
     * @alias cssFile
     */
    cssFiles?: string[];

    /**
     * Single CSS file to load into a <style></style> element
     * @alias cssFile
     */
    cssFile?: string;

}
export class CypressAngularConfig extends StyleOptions {

    detectChanges?= true;

    log?= false;
}