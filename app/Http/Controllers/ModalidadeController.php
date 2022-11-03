<?php

namespace App\Http\Controllers;

use App\Models\Modalidade;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ModalidadeController extends Controller
{

    public function index()
    {
        $modalidades = Modalidade::all();

        return Inertia::render('Modalidades/Index', compact('modalidades'));
    }

    public function indexAdmin()
    {
        $modalidades = Modalidade::all();

        return Inertia::render('Admin/Modalidades/Index', compact('modalidades'));
    }


    public function create()
    {
        return Inertia::render('Admin/Modalidades/Create');
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
            'nome' => 'required|min:3|max:255',
            'status' => 'required|boolean',
            'dias' => 'required|min:3|max:255',
            'endereco' => 'required|min:3|max:255',
            'responsavel' => 'required|min:3|max:255',
            'responsavelContato' => 'required|min:8|max:8',
        ]);

        $validated['responsavelContato'] = '55389' + $validated['responsavelContato'];

        Modalidade::create($validated);

        return redirect()->route('admin.modalidades');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
