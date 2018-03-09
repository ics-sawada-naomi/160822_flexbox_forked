// 変換したいCSSファイルのパス
const cssFile = 'docs/css/style.css';
// 変換後のCSSファイルを保存するパス
const cssDistPath = 'docs/css/';
// 変換後のCSSファイルの名前
const cssDistFile = 'style_dist.css';

/*
 * ここからタスク処理
 */
// gulpプラグインの読みこみ
const gulp = require('gulp');
// gulp-renameの読み込み
const rename = require('gulp-rename');
// Autoprefixerの読み込み
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', () =>
  gulp.src(cssFile)
    .pipe(autoprefixer({
      // IEは10以上、Androidは4以上、iOS Safariは8以上
      browsers: ['ie >= 10', 'Android >= 4', 'ios_saf >= 8'],
      cascade: false
    }))
    .pipe(rename(cssDistFile))
    .pipe(gulp.dest(cssDistPath)));
