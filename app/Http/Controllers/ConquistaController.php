<?php

namespace App\Http\Controllers;

use App\Models\Campeonato;
use App\Models\Conquista;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ConquistaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $conquistas = Conquista::with('campeonato')->get();

        return Inertia::render('Admin/Conquistas/Index', [
            'conquistas' => $conquistas,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $campeonatos = Campeonato::all();
        return Inertia::render('Admin/Conquistas/Create', [
            'campeonatos' => $campeonatos,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nome' => 'required|min:3|max:32',
            'modalidade' => 'required',
            'colocacao' => 'required',
            'campeonato_id' => 'required|exists:campeonatos,id',
        ]);

        Conquista::create($validated);

        return redirect()->route('admin.conquistas.index');
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $conquista = Conquista::findOrFail($id);
        $campeonatos = Campeonato::all();

        return Inertia::render('Admin/Conquistas/Edit', [
            'conquista' => $conquista,
            'campeonatos' => $campeonatos,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $conquista = Conquista::findOrFail($id);

        $validated = $request->validate([
            'nome' => 'required|min:3|max:32',
            'modalidade' => 'required',
            'colocacao' => 'required',
            'campeonato_id' => 'required|exists:campeonatos,id',
        ]);

        $conquista->update($validated);

        return redirect()->route('admin.conquistas.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $conquista = Conquista::findOrFail($id);

        $conquista->delete();

        return redirect()->route('admin.conquistas.index');
    }
}
