function SightSeeings(){
    return <div>    
        {<Routes>
            <Route path="/eiffel" element={<Eiffel />} />
            <Route path="/other_sightseeings" element={< OtherSightseeings/>} />             
        </Routes>}
    </div>;
}