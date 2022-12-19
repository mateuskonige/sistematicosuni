<?php

namespace App\Http\Controllers;

use App\Models\Noticia;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NoticiaController extends Controller
{
    public function index()
    {
        $noticia = Noticia::firstOrFail();

        return Inertia::render('Admin/Noticia/Index', [
            'noticia' => $noticia,
        ]);
    }

    public function update(Request $request, $id)
    {
        $noticia = Noticia::findOrFail($id);

        $validated = $request->validate([
            'description' => 'required|min:3|max:256',
            'active' => 'required',
        ]);

        $noticia->update($validated);

        return redirect()->route('admin.noticia.index')->with('success', 'A notícia foi atualizada.');
    }
}
