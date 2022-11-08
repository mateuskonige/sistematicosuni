<?php

use App\Http\Controllers\CampeonatoController;
use App\Http\Controllers\ConquistaController;
use App\Http\Controllers\ModalidadeController;
use App\Http\Controllers\SobreController;
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

Route::get('/sobre', [SobreController::class, 'index'])->name('sobre.index');

Route::get('/midia', function () {
    return Inertia::render('Midia/Index');
});

Route::get('/contato', function () {
    return Inertia::render('Contato/Index');
});

Route::get('/modalidades', [ModalidadeController::class, 'index'])->name('modalidades.index');

Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');

    Route::get('/modalidades', [ModalidadeController::class, 'indexAdmin'])->middleware(['auth'])->name('modalidades');

    Route::get('/modalidades/create', [ModalidadeController::class, 'create'])->middleware(['auth'])->name('modalidades.create');

    Route::post('/modalidades', [ModalidadeController::class, 'store'])->middleware(['auth'])->name('modalidades.store');

    Route::get('/modalidades/{id}/edit', [ModalidadeController::class, 'edit'])->middleware(['auth'])->name('modalidades.edit');

    Route::put('/modalidades/{id}', [ModalidadeController::class, 'update'])->middleware(['auth'])->name('modalidades.update');

    Route::delete('/modalidades/{id}', [ModalidadeController::class, 'destroy'])->middleware(['auth'])->name('modalidades.destroy');

    Route::resource('campeonatos', CampeonatoController::class);

    Route::resource('conquistas', ConquistaController::class);
});

require __DIR__ . '/auth.php';
