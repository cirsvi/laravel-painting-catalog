<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PaintingApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_top_paintings_endpoint_returns_json(): void
    {
        $response = $this->getJson('/data/get-top-paintings');

        $response->assertStatus(200);
    }

    public function test_unknown_painting_return_404(): void
    {
        $response = $this->getJson('/data/get-painting/99999');

        $response->assertStatus(404);
    }
}
