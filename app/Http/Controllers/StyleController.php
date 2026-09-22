<?php

namespace App\Http\Controllers;

use App\Http\Requests\StyleRequest;
use App\Models\Style;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class StyleController extends Controller
{
    private function saveStyleData(Style $style, StyleRequest $request): void
    {
        $validatedData = $request->validated();
        $style->fill($validatedData);
        $style->save();
    }

    public function list(): View
    {
        $items = Style::orderBy('name', 'asc')->get();

        return view(
            'style.list',
            [
                'title' => 'Styles',
                'items' => $items,
            ]
        );
    }

    public function create(): View
    {
        return view(
            'style.form',
            [
                'title' => 'Add new style',
                'style' => new Style,
            ]
        );
    }

    public function put(StyleRequest $request): RedirectResponse
    {
        $style = new Style;
        $this->saveStyleData($style, $request);

        return redirect('/styles');
    }

    public function update(Style $style): View
    {
        return view(
            'style.form',
            [
                'title' => 'Edit style',
                'style' => $style,
            ]
        );
    }

    public function patch(Style $style, StyleRequest $request): RedirectResponse
    {
        $this->saveStyleData($style, $request);

        return redirect('/styles');
    }

    public function delete(Style $style): RedirectResponse
    {
        $style->delete();

        return redirect('/styles');
    }
}
