## Passing JavaScript Buffers to C/C++ Functions

Emscripten provides multiple ways of passing TypedBuffers to emscriptened code.  
Many of these way incur internal and hidden copying of the data.  
Here are some of them with some minimal profiling code.  

#### Usage
1. Set your emscripten paths in `build.sh`
2. Run `./build.sh`
3. Open `index.html` in your browser.
4. Check the browser developer console to see the results.

Alternatively, see it [live here](https://adishavit.github.io/emscripten_buffers/) (the page appears blank, open console to see results).
