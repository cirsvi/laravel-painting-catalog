<?php

namespace App\Http\Controllers;

use App\Http\Requests\ArtistRequest;
use App\Models\Artist;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class ArtistController extends Controller
{
    private function saveArtistData(Artist $artist, ArtistRequest $request): void
    {
        $validatedData = $request->validated();

        $artist->fill($validatedData);
        $artist->save();
    }

    public function list(): View
    {
        $items = Artist::orderBy('name', 'asc')->get();

        return view(
            'artist.list',
            [
                'title' => 'Artists',
                'items' => $items,
            ]
        );
    }

    public function create(): View
    {
        return view(
            'artist.form',
            [
                'title' => 'Add new artist',
                'artist' => new Artist,
            ]
        );
    }

    public function put(ArtistRequest $request): RedirectResponse
    {
        $artist = new Artist;
        $this->saveArtistData($artist, $request);

        return redirect('/artists');
    }

    public function update(Artist $artist): View
    {
        return view(
            'artist.form',
            [
                'title' => 'Edit artist',
                'artist' => $artist,
            ]
        );
    }

    public function patch(Artist $artist, ArtistRequest $request): RedirectResponse
    {
        $this->saveArtistData($artist, $request);

        return redirect('/artists');
    }

    public function delete(Artist $artist): RedirectResponse
    {
        $artist->delete();

        return redirect('/artists');
    }

    public static function middleware(): array
    {
        return [
            'auth',
        ];
    }
}
