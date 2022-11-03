<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('modalidades', function (Blueprint $table) {
      $table->id();
      $table->string('nome');
      $table->boolean('status');
      $table->string('dias');
      $table->string('endereco');
      $table->string('responsavel');
      $table->string('responsavelContato');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('modalidades');
  }
};
