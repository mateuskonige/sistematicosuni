<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        \App\Models\Campeonato::create([
            'nome' => 'UNICOPA',
            'ano' => '2022'
        ]);

        \App\Models\Conquista::create([
            'nome' => 'Voleibol',
            'modalidade' => 'M',
            'colocacao' => '2',
            'campeonato_id' => 1
        ]);

        \App\Models\Modalidade::create([
            'nome' => 'Voleibol',
            'status' => '1',
            'dias' => 'Quinta-feira, 19h',
            'endereco' => 'Quadra 1, UNIMONTES',
            'responsavel' => 'Henrique Gabriel',
            'responsavelContato' => '40028922',
        ]);

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
