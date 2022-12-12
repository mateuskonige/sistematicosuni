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
            'responsavelContato' => '5538988664847',
        ]);

        \App\Models\Link::create([
            'loja' => 'https://www.sympla.com.br/evento/computaria/',
            'ingressos' => 'https://www.sympla.com.br/evento/computaria/',
            'playlist' => 'https://open.spotify.com/embed/playlist/37i9dQZEVXbMXbN3EUUhlg?utm_source=generator',
            'driveFotos' => 'https://www.drive.google.com/',
        ]);
    }
}
