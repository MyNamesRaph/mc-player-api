import Player from "../models/player.ts";

type Props = {
    url : string
  };

export default function PlayerHead({url} : Props) {

    function getStyle(url: string) {
        return {
            position: "absolute",
            backgroundImage: "url("+url+")",
            backgroundRepeat: "no-repeat",
            msInterpolationMode: "nearest-neighbor",
            imageRendering: "pixelated",
        };
    }
    
    return (
        <div class="head">
            <div class="faces">
                <div class="inner back" style={getStyle(url)}></div>
                <div class="inner right" style={getStyle(url)}></div>
                <div class="inner top" style={getStyle(url)}></div>
                <div class="inner bottom" style={getStyle(url)}></div>
                <div class="inner front" style={getStyle(url)}></div>
                <div class="inner left" style={getStyle(url)}></div>
                <div class="outer back" style={getStyle(url)}></div>
                <div class="outer right" style={getStyle(url)}></div>
                <div class="outer top" style={getStyle(url)}></div>
                <div class="outer bottom" style={getStyle(url)}></div>
                <div class="outer front" style={getStyle(url)}></div>
                <div class="outer left" style={getStyle(url)}></div>
            </div>
        </div>
    );
}
