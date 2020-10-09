module.exports = function(eleventyConfig) {
    return {
        dir: {
        input: 'src/html',
        includes: '_includes',
        data: '_data',
        output: "dist"
        }
    }
}