class SongRenderer {

  constructor(element) {
    this.element = element;
  }

  draw(song) {
    this.element.innerHTML = `
      <h1>${song.song_name} - ${song.artist_name}</h1>
      <pre>${this._markupChords(song.lyrics)}</pre>
    `;
  }

  _markupChords(lyrics) {
    return lyrics.replace(/\[ch\]([\w\#\/\\]*)\[\/ch\]/gi, "<span class='chord'>$1</span>");
  }

}
