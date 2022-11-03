<?php

use App\Http\Controllers\ModalidadeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Index', [
        'canLogin' => Route::has('login'),
    ]);
});

Route::get('/modalidades', [ModalidadeController::class, 'index'])->name('modalidades.index');

Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');

    Route::get('/modalidades', [ModalidadeController::class, 'indexAdmin'])->middleware(['auth'])->name('modalidades');

    Route::get('/modalidades/create', [ModalidadeController::class, 'create'])->middleware(['auth'])->name('modalidades.create');

    Route::post('/modalidades', [ModalidadeController::class, 'store'])->middleware(['auth'])->name('modalidades.store');
});

require __DIR__ . '/auth.php';
