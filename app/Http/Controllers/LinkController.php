<?php

namespace App\Http\Controllers;

use App\Models\Link;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LinkController extends Controller
{
    public function index()
    {
        $links = Link::firstOrFail();

        return Inertia::render('Admin/Links/Index', [
            'links' => $links,
        ]);
    }

    public function update(Request $request, $id)
    {
        $links = Link::findOrFail($id);

        $validated = $request->validate([
            'loja' => 'required|min:3|max:256',
            'ingressos' => 'required|min:3|max:256',
            'playlist' => 'required|min:3|max:256',
            'driveFotos' => 'required|min:3|max:256',
        ]);

        $links->update($validated);

        return redirect()->route('admin.links.index')->with('success', 'Os links foram atualizados.');
    }
}
