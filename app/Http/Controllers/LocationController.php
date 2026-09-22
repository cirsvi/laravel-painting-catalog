<?php

namespace App\Http\Controllers;

use App\Http\Requests\LocationRequest;
use App\Models\Location;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class LocationController extends Controller
{
    private function saveLocationData(Location $location, LocationRequest $request): void
    {
        $validatedData = $request->validated();
        $location->fill($validatedData);
        $location->save();
    }

    public function list(): View
    {
        $items = Location::orderBy('name', 'asc')->get();

        return view(
            'location.list',
            [
                'title' => 'Locations',
                'items' => $items,
            ]
        );
    }

    public function create(): View
    {
        return view(
            'location.form',
            [
                'title' => 'Add new location',
                'location' => new Location,
            ]
        );
    }

    public function put(LocationRequest $request): RedirectResponse
    {
        $location = new Location;
        $this->saveLocationData($location, $request);

        return redirect('/locations');
    }

    public function update(Location $location): View
    {
        return view(
            'location.form',
            [
                'title' => 'Edit location',
                'location' => $location,
            ]
        );
    }

    public function patch(Location $location, LocationRequest $request): RedirectResponse
    {
        $this->saveLocationData($location, $request);

        return redirect('/locations');
    }

    public function delete(Location $location): RedirectResponse
    {
        $location->delete();

        return redirect('/locations');
    }
}
