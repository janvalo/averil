var elixir  = require('laravel-elixir'),
jade		= require('laravel-elixir-jade'),
BrowserSync = require('laravel-elixir-browsersync2');

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
	mix.sass(['averil.scss'],'public/css/averil.css')
	mix.sass(['style-guide.scss'],'public/css/style-guide.css')
	mix.jade({
        baseDir: './resources/assets',
	    blade: false,
	    dest: '../../../public/',
	    pretty: false,
	    html:true,
	    search: '*.jade',
	    src: '/jade/'
	})
	mix.BrowserSync(
	{
  		files: ['/resources/assets/sass/*.scss','/resources/assets/jade/*.jade'],
		proxy : "localhost:3030",
		port: 6699,
		ui: {
            port: 6691
    }})
});

