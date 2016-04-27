var elixir  = require('laravel-elixir'),
BrowserSync = require('laravel-elixir-browsersync'),
src         = 'src',
build       = 'build';

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
	BrowserSync.init();
	mix.sass(build + '/css');
	mix.jade({
        search: '*.jade',
        dest: build
	});
	mix.BrowserSync({
	    server: {baseDir: [build, src]},
	    port: 9999,
	    open: false,
	    files: [build + '/css/*.css', build + '/js/*.js'],
	    notify: false
	});
});

